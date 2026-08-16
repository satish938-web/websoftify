import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', company: 'Websoftify' });
});

app.use('/api/contact', contactRoutes);

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/websoftify')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    app.listen(PORT, () =>
      console.log(`Server running without DB on http://localhost:${PORT}`)
    );
  });
