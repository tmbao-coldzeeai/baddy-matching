const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  level: { 
    type: String, 
    enum: ['A', 'B', 'C', 'D', 'E'],
    required: true 
  },
  location: { type: String, required: true },
  preferredTimeFrames: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Player', playerSchema);