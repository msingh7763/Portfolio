import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

const CONTACT_RECEIVER_EMAIL = 'msingh7763@gmail.com';
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

    const transporter = createTransporter();
    if (!transporter) {
      console.error('❌ Mail service not configured. Missing MAIL_USER and/or MAIL_APP_PASSWORD (or MAIL_PASSWORD)');
      return res.status(500).json({
        error: 'Mail service is not configured. Please set MAIL_USER and MAIL_APP_PASSWORD (or MAIL_PASSWORD) in environment variables.',
      });
    }

    // Validate SMTP connectivity first so timeouts/auth issues are surfaced clearly.
    await transporter.verify();

    // ✅ Send email to portfolio owner
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

    // ✅ Save to database
    const contact = new Contact({ name, email, message });
    await contact.save();

    return res.status(201).json({ message: 'Message sent successfully.' });
  } catch (error) {
    const code = error?.code || '';
    const message = error?.message || 'Unknown error';

    console.error('❌ Contact route error:', message, code ? `(code: ${code})` : '');

    if (message.toLowerCase().includes('connection timeout') || code === 'ETIMEDOUT') {
      return res.status(504).json({
        error: 'Mail server connection timed out. Check MAIL_HOST/MAIL_PORT and verify outbound SMTP access from deployment.',
      });
    }

    if (code === 'EAUTH') {
      return res.status(401).json({
        error: 'Mail authentication failed. Verify MAIL_USER and MAIL_APP_PASSWORD (or MAIL_PASSWORD).',
      });
    }

    return res.status(500).json({ error: `Failed to send message: ${message}` });
  }
});

export default router;
