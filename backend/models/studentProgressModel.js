const mongoose = require('mongoose');

const StudentProgressSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    course_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true},
    completed_topics: [{type: mongoose.Schema.Types.ObjectId}], // Array of topic IDs
    last_updated: {type: Date, default: Date.now},
});

module.exports = mongoose.model('StudentProgress', StudentProgressSchema);
