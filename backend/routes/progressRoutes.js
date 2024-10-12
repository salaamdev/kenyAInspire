const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, progressController.getProgressForStudent);
router.put(
    '/courses/:courseId/topics/:topicId',
    authMiddleware,
    progressController.updateTopicCompletion
); // New route

module.exports = router;
