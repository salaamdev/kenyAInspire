const express = require('express');
const router = express.Router();
const {register, verifyOTP, login} = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register new user or request OTP
router.post('/register', register);

// @route   POST /api/auth/verify-otp
// @desc    Verify OTP and complete registration
router.post('/verify-otp', verifyOTP);

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', login);

module.exports = router;
