// routes/quizRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const quizController = require('../controllers/quizController');

// Generate Quiz Questions
router.post('/generate', authMiddleware, quizController.generateQuiz);

// Record User's Answer
router.post('/record-answer', authMiddleware, quizController.recordAnswer);

// Get User's Failed Questions
router.get('/failed-questions', authMiddleware, quizController.getFailedQuestions);

// Delete a Failed Question
router.delete('/failed-questions/:questionId', authMiddleware, quizController.deleteFailedQuestion);

module.exports = router;
