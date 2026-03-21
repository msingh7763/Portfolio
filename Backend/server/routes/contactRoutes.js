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

    const transporter = createTransporter();
    if (!transporter) {
      return res.status(500).json({
        error: 'Mail service is not configured. Please set MAIL_USER and MAIL_APP_PASSWORD.',
      });
    }

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.MAIL_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      text: `You received a new contact form message.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    const contact = new Contact({ name, email, message });
    await contact.save();

    return res.status(201).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
});

export default router;
