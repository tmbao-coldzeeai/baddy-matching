// Validation middleware for player data
const { body, validationResult } = require('express-validator');

const validatePlayer = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('level')
    .isIn(['A', 'B', 'C', 'D', 'E'])
    .withMessage('Level must be one of A, B, C, D, or E'),
  body('location').notEmpty().withMessage('Location is required'),
  body('preferredTimeFrames')
    .isArray({ min: 1 })
    .withMessage('Preferred time frames are required')
    .isLength({ min: 1 })
    .withMessage('At least one preferred time frame is required'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }
    next();
  }
];

module.exports = validatePlayer;