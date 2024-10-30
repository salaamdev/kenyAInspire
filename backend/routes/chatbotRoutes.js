// routes/chatbotRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const chatbotController = require('../controllers/chatbotController');

router.post('/', authMiddleware, chatbotController.handleMessage);

module.exports = router;
