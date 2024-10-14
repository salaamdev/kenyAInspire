const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    event_date: Date,
    description: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Event', EventSchema);
