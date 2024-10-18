// controllers/eventController.js

const {Op} = require('sequelize');
const Event = require('../models/event');

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            where: {
                event_date: {
                    [Op.gte]: new Date(),
                },
            },
            order: [['event_date', 'ASC']],
        });
        res.json({events});
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({message: 'Server error'});
    }
};
