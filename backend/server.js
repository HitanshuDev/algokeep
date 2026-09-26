// backend/server.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/noteRoutes.js';
import authRoutes from './routes/authRoutes.js';
import geminiapi from './routes/geminiapi.js';

const app = express();
const allowedOrigins = [
  "https://algokeep.hitanshukhandelwal.com",
  "https://algo-keep-dsa-notes-manager.vercel.app",
  "http://localhost:3000",
  "http://frontend:3000",
  ...(process.env.CORS_ORIGIN?.split(',').map(o => o.trim()).filter(Boolean) ?? [])
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    callback(null, false);
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);
app.use('/api/generate-algorithm', geminiapi);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ Mongo error:', err));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Routes
app.use('/api/notes', noteRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
