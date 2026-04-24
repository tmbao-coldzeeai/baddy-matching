const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/baddy-matching';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Import routes
const playerRoutes = require('./routes/players');

// API Routes
app.use('/api/players', playerRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Baddy-Matching Server' });
});

// Serve static files from the Next.js build directory
app.use(express.static(path.join(__dirname, '../web/.next')));

// Catch-all route for Next.js pages (this will be handled by the frontend in production)
app.get('*', (req, res) => {
  // For development, we can just return a basic response
  res.json({ message: 'Baddy-Matching API Server' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;