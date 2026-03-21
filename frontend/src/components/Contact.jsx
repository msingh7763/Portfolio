import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiSend, FiUser } from 'react-icons/fi';
import { buildApiUrl } from '../config/api';

const CONTACT_ENDPOINT = buildApiUrl('/api/contact');

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isError = status.toLowerCase().startsWith('failed');

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus('');

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get('content-type') || '';
      const rawBody = await response.text();
      let payload = null;

      if (rawBody && contentType.includes('application/json')) {
        try {
          payload = JSON.parse(rawBody);
        } catch {
          payload = null;
        }
      }

      if (!response.ok) {
        const serverMessage = payload?.error || payload?.message || rawBody?.trim();

        if (!serverMessage || serverMessage.startsWith('<')) {
          throw new Error('Server returned an unexpected response. Please verify API deployment and VITE_API_BASE_URL.');
        }

        throw new Error(serverMessage);
      }

      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      const reason = error?.message || 'Unknown error';
      setStatus(`Failed to send message: ${reason}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative max-w-6xl px-4 py-16 mx-auto overflow-hidden sm:px-6">
      <div className="absolute rounded-full pointer-events-none -left-24 -top-24 h-60 w-60 bg-cyan-400/15 blur-3xl" />
      <div className="absolute rounded-full pointer-events-none -bottom-20 -right-24 h-72 w-72 bg-orange-400/15 blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <motion.aside
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden border rounded-3xl border-slate-200/80 bg-white/85 p-7 shadow-glass backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70"
        >
          <p className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-orange-700 uppercase border rounded-full border-orange-300/60 bg-orange-100/70 dark:border-orange-400/30 dark:bg-orange-500/10 dark:text-orange-300">
            Contact Me
          </p>
          <h2 className="mt-4 font-['Georgia'] text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            If you&apos;re interested in hiring me,
            <br />
            let&apos;s connect.
          </h2>
          <p className="max-w-md mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Send your message and I&apos;ll get back to you. Let&apos;s build something great together.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 px-4 py-3 border rounded-2xl border-slate-200/80 bg-slate-50/70 dark:border-slate-700 dark:bg-slate-800/60">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                <FiMail size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">Contact Message</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">If you&apos;re interested in hiring me, then contact me.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border rounded-2xl border-slate-200/80 bg-slate-50/70 dark:border-slate-700 dark:bg-slate-800/60">
              <span className="p-2 text-orange-600 rounded-xl bg-orange-500/10 dark:text-orange-300">
                <FiSend size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">Reply Time</p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative border rounded-3xl border-slate-200/90 bg-white/90 p-7 shadow-glass backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/75"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Send a Message</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Share your name and project idea.</p>
          </div>

          <label htmlFor="contact-name" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Your Name
          </label>
          <div className="relative">
            <span className="absolute -translate-y-1/2 pointer-events-none left-3 top-1/2 text-slate-400 dark:text-slate-500">
              <FiUser size={18} />
            </span>
            <input
              id="contact-name"
              value={form.name}
              onChange={onChange}
              name="name"
              placeholder="Enter your full name"
              className="w-full px-10 py-3 transition bg-white border outline-none rounded-xl border-slate-300/90 text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-900/40"
              required
            />
          </div>

          <label htmlFor="contact-email" className="block mt-5 mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Your Email
          </label>
          <div className="relative">
            <span className="absolute -translate-y-1/2 pointer-events-none left-3 top-1/2 text-slate-400 dark:text-slate-500">
              <FiMail size={18} />
            </span>
            <input
              id="contact-email"
              value={form.email}
              onChange={onChange}
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-10 py-3 transition bg-white border outline-none rounded-xl border-slate-300/90 text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-900/40"
              required
            />
          </div>

          <label htmlFor="contact-message" className="block mt-5 mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
          </label>
          <textarea
            id="contact-message"
            value={form.message}
            onChange={onChange}
            name="message"
            placeholder=""
            rows="6"
            className="w-full px-4 py-3 transition bg-white border outline-none rounded-xl border-slate-300/90 text-slate-900 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-cyan-400 dark:focus:ring-cyan-900/40"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-6 font-semibold text-white transition shadow-lg rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FiSend size={16} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className={`mt-4 text-sm ${isError ? 'text-rose-600 dark:text-rose-300' : 'text-emerald-600 dark:text-emerald-300'}`}>
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
