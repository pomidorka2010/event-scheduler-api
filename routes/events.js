const express = require('express');
const router = express.Router();

// @route   GET /api/v1/events
// @desc    Get all events
// @access  Public
router.get('/', (req, res) => {
  // handle fetching events
});

// @route   POST /api/v1/events
// @desc    Create a new event
// @access  Private
router.post('/', (req, res) => {
  // handle creating an event
});

module.exports = router;
