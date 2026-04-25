const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Simple in-memory data store for testing
let players = [
  {
    id: '1',
    name: 'Test Player',
    phone: '+1234567890',
    level: 'B',
    location: 'Sydney, NSW',
    preferredTimeFrames: ['Morning', 'Evening'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// API Routes
app.get('/api/players', (req, res) => {
  res.json(players);
});

app.post('/api/players', (req, res) => {
  const newPlayer = {
    id: (players.length + 1).toString(),
    ...req.body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Baddy-Matching API Server' });
});

app.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
});

module.exports = app;