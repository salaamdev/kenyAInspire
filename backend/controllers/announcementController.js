// controllers/announcementController.js

const Announcement = require('../models/announcement');

exports.getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.findAll({
            order: [['created_at', 'DESC']],
        });
        res.json({announcements});
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).json({message: 'Server error'});
    }
};
