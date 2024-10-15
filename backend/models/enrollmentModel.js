const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Ensure this field is required
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true, // Ensure this field is required
    },
    enrolled_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);