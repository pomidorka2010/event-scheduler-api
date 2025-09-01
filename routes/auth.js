const express = require('express');
const router = express.Router();

// @route   POST /api/v1/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', (req, res) => {
  // handle registration logic
});

// @route   POST /api/v1/auth/login
// @desc    Login existing user
// @access  Public
router.post('/login', (req, res) => {
  // handle login logic
});

module.exports = router;
