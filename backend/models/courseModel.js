const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Course', CourseSchema);
