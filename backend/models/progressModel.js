const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    completed_modules: {
        type: Number,
        default: 0,
    },
    total_modules: {
        type: Number,
        default: 0,
    },
    last_updated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Progress', ProgressSchema);
