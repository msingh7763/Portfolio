import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const CLIENT_URLS = (process.env.CLIENT_URLS || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

// ✅ Middleware
app.use(express.json({ limit: '1mb' }));

// ✅ CORS (allow configured client origins; fallback to allow-all if not configured)
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || CLIENT_URLS.length === 0 || CLIENT_URLS.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
}));

// ✅ Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// ✅ Health check routes
app.get('/', (req, res) => {
  res.send('Portfolio API is running ✅');
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

console.log(`[env] MAIL_USER: ${process.env.MAIL_USER ? 'set' : 'missing'}`);
console.log(`[env] MAIL_APP_PASSWORD/MAIL_PASSWORD: ${(process.env.MAIL_APP_PASSWORD || process.env.MAIL_PASSWORD) ? 'set' : 'missing'}`);
console.log(`[env] CLIENT_URLS: ${CLIENT_URLS.length > 0 ? CLIENT_URLS.join(', ') : 'not set (allow-all mode)'}`);

// ❌ Stop server if Mongo URI missing
if (!MONGO_URI) {
  console.error('❌ MONGO_URI is missing in environment variables');
  process.exit(1);
}

// ✅ Connect DB + Start Server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });