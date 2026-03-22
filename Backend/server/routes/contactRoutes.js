import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || 'msingh7763@gmail.com';
const getMailPassword = () => process.env.MAIL_APP_PASSWORD || process.env.MAIL_PASSWORD || '';

const getMailConfig = () => {
  const host = process.env.MAIL_HOST || 'smtp.gmail.com';
  const port = Number(process.env.MAIL_PORT || 465);
  const secure = process.env.MAIL_SECURE ? process.env.MAIL_SECURE === 'true' : port === 465;

  return {
    host,
    port,
    secure,
    connectionTimeout: Number(process.env.MAIL_CONNECTION_TIMEOUT || 15000),
    greetingTimeout: Number(process.env.MAIL_GREETING_TIMEOUT || 10000),
    socketTimeout: Number(process.env.MAIL_SOCKET_TIMEOUT || 20000),
  };
};

const createTransporter = () => {
  const mailPassword = getMailPassword();

  if (!process.env.MAIL_USER || !mailPassword) {
    return null;
  }

  const mailConfig = getMailConfig();

  return nodemailer.createTransport({
    ...mailConfig,
    auth: {
      user: process.env.MAIL_USER,
      pass: mailPassword,
    },
  });
};

const sendNotificationEmail = async ({ name, email, message }) => {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn('⚠️ Mail service not configured. Contact saved without email notification.');
    return;
  }

  await transporter.sendMail({
    from: `Portfolio Contact <${process.env.MAIL_USER}>`,
    to: CONTACT_RECEIVER_EMAIL,
    replyTo: email,
    subject: `New Portfolio Contact from ${name}`,
    text: `You received a new contact form message.\n\nName: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });
};

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // ✅ Save to database first so user submission does not fail when SMTP is slow.
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send notification in background; do not block API response.
    sendNotificationEmail({ name, email, message }).catch((mailError) => {
      const code = mailError?.code || '';
      const mailMessage = mailError?.message || 'Unknown mail error';
      console.error('⚠️ Background mail failed:', mailMessage, code ? `(code: ${code})` : '');
    });

    return res.status(201).json({ message: 'Message received successfully.' });
  } catch (error) {
    const message = error?.message || 'Unknown error';

    console.error('❌ Contact route error:', message);

    return res.status(500).json({ error: 'Failed to submit contact form. Please try again.' });
  }
});

export default router;
