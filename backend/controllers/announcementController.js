const Announcement = require('../models/announcementModel');

exports.getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({created_at: -1});
        res.json({announcements});
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).json({message: 'Server error'});
    }
};
