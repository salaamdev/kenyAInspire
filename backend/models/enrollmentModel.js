const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    enrolled_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
