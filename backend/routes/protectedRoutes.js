const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/protected/dashboard
// @desc    Get user dashboard
router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({message: 'Welcome to the protected dashboard!'});
});

module.exports = router;
