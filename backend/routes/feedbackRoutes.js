// routes/feedbackRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const aiFeedbackController = require('../controllers/aiFeedbackController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {recursive: true});
    console.log('Created uploads directory.');
}

// Define allowed file types
const ALLOWED_MIME_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
];

// Configure multer with file type and size limits
const upload = multer({
    dest: uploadDir,
    limits: {fileSize: 5 * 1024 * 1024}, // 5 MB
    fileFilter: (req, file, cb) => {
        if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Unsupported file type'), false);
        }
    },
});

router.post('/', authMiddleware, upload.single('file'), aiFeedbackController.getAIFeedback);

// Error handling for file upload errors
router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading
        return res.status(400).json({message: err.message});
    } else if (err) {
        // An unknown error occurred
        return res.status(400).json({message: err.message});
    }
    next();
});

module.exports = router;
