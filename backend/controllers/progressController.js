// controllers/progressController.js

const Progress = require('../models/progress');
const StudentProgress = require('../models/studentTopicProgress');
const Course = require('../models/course');
const Enrollment = require('../models/enrollment');
const {Op} = require('sequelize');
const User = require('../models/user');
const Topic = require('../models/topic');

exports.getProgressForStudent = async (req, res) => {
    const userId = req.user.id;

    try {
        const progressData = await Progress.findAll({
            where: {user_id: userId},
        });

        res.json({progress: progressData});
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.updateTopicCompletion = async (req, res) => {
    const userId = parseInt(req.user.id, 10);
    const {courseId, topicId} = req.params;
    const topicIdInt = parseInt(topicId, 10);
    const {isCompleted} = req.body;

    try {
        // Verify user exists
        const userExists = await User.findByPk(userId);
        if (!userExists) {
            return res.status(400).json({message: 'User not found'});
        }

        // Verify topic exists
        const topicExists = await Topic.findByPk(topicIdInt);
        if (!topicExists) {
            return res.status(400).json({message: 'Topic not found'});
        }

        let studentProgress = await StudentProgress.findOne({
            where: {
                user_id: userId,
                topic_id: topicIdInt,
            },
        });

        if (!studentProgress) {
            // Create new progress record
            studentProgress = await StudentProgress.create({
                user_id: userId,
                topic_id: topicId,
                is_completed: isCompleted,
                last_updated: new Date(),
            });
        } else {
            // Update existing progress record
            studentProgress.is_completed = isCompleted;
            studentProgress.last_updated = new Date();
            await studentProgress.save();
        }

        res.json({message: 'Topic completion status updated'});
    } catch (error) {
        console.error('Error updating topic completion:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.getOverallProgress = async (req, res) => {
    const userId = parseInt(req.user.id, 10);

    try {
        const progressData = await StudentProgress.findAll({
            where: {user_id: userId},
            include: [{model: Course, include: [Topic]}],
        });

        let totalCompletedTopics = 0;
        let totalTopics = 0;

        for (const progress of progressData) {
            const topics = progress.Course.Topics;
            totalTopics += topics.length;
            totalCompletedTopics += topics.filter((topic) => topic.StudentTopicProgress.is_completed).length;
        }

        const completionRate = totalTopics > 0 ? (totalCompletedTopics / totalTopics) * 100 : 0;

        res.json({
            totalCompletedTopics,
            totalTopics,
            completionRate,
        });
    } catch (error) {
        console.error('Error fetching overall progress:', error);
        res.status(500).json({message: 'Server error'});
    }
};
