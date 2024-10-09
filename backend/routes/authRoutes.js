const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register new user
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', login);

module.exports = router;
