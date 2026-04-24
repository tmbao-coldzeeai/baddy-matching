const Player = require('../models/Player');
const { validationResult } = require('express-validator');

// Get all players
const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get player by ID
const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new player
const createPlayer = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const player = new Player({
      name: req.body.name,
      phone: req.body.phone,
      level: req.body.level,
      location: req.body.location,
      preferredTimeFrames: req.body.preferredTimeFrames
    });
    
    const savedPlayer = await player.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update player
const updatePlayer = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const player = await Player.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        phone: req.body.phone,
        level: req.body.level,
        location: req.body.location,
        preferredTimeFrames: req.body.preferredTimeFrames,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    );
    
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    
    res.json(player);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete player
const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    
    res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search players
const searchPlayers = async (req, res) => {
  try {
    const { location, level, preferredTimeFrames } = req.body;
    
    // Build search query
    const query = {};
    
    if (location) {
      query.location = new RegExp(location, 'i');
    }
    
    if (level) {
      query.level = level;
    }
    
    if (preferredTimeFrames && preferredTimeFrames.length > 0) {
      query.preferredTimeFrames = { $in: preferredTimeFrames };
    }
    
    const players = await Player.find(query);
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  searchPlayers
};