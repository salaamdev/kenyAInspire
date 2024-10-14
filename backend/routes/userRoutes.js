const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

router.put('/profile', authMiddleware, userController.updateProfile);

module.exports = router;
