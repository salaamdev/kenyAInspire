const Event = require('../models/eventModel');

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find({event_date: {$gte: new Date()}}).sort({event_date: 1});
        res.json({events});
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({message: 'Server error'});
    }
};
