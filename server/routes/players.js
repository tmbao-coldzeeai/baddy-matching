const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const validatePlayer = require('../middleware/validatePlayer');

// Routes
router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.post('/', validatePlayer, playerController.createPlayer);
router.put('/:id', validatePlayer, playerController.updatePlayer);
router.delete('/:id', playerController.deletePlayer);
router.post('/search', playerController.searchPlayers);

module.exports = router;