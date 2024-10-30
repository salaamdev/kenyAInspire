// backend/routes/quizRoutes.js

const express = require('express');
const router = express.Router();
const {generateQuiz, storeFailedQuestions} = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');


// Generate Quiz Questions
router.post('/generate', authMiddleware, generateQuiz);

// Store Failed Questions
router.post('/store-failed', authMiddleware, storeFailedQuestions);

module.exports = router;