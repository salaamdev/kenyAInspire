const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String, // The course material for the topic
});

const CourseSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    topics: [TopicSchema], // An array of topics
    created_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', CourseSchema);
