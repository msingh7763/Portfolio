import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

const CONTACT_RECEIVER_EMAIL = 'msingh7763@gmail.com';

const createTransporter = () => {
  if (!process.env.MAIL_USER || !process.env.MAIL_APP_PASSWORD) {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_APP_PASSWORD,
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
      console.error('❌ Mail service not configured. Missing MAIL_USER or MAIL_APP_PASSWORD');
      return res.status(500).json({
        error: 'Mail service is not configured. Please set MAIL_USER and MAIL_APP_PASSWORD in environment variables.',
      });
    }

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
    console.error('❌ Contact route error:', error.message);
    return res.status(500).json({ error: `Failed to send message: ${error.message}` });
  }
});

export default router;
