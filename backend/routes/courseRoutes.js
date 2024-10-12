const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const courseController = require('../controllers/courseController');

router.get('/', authMiddleware, courseController.getCoursesForStudent);

module.exports = router;
