// controllers/courseController.js

const {Course, Enrollment, Topic, StudentTopicProgress, User} = require('../models');
const {Op} = require('sequelize');

exports.getCoursesForStudent = async (req, res) => {
    const userId = req.user.id; // Adjusted from req.user._id to req.user.id

    try {
        // Fetch enrollments for the user, including the associated courses and topics
        const enrollments = await Enrollment.findAll({
            where: {user_id: userId},
            include: {
                model: Course,
                include: {
                    model: Topic,
                    attributes: ['id'], // We only need the topic IDs here
                },
            },
        });

        // Map over enrollments to calculate progress for each course
        const courses = await Promise.all(
            enrollments.map(async (enrollment) => {
                const course = enrollment.Course;
                if (!course) {
                    return null;
                }

                const totalTopics = course.Topics.length;

                // Fetch completed topics for the user in this course
                const completedTopics = await StudentTopicProgress.findAll({
                    where: {
                        user_id: userId,
                        topic_id: {
                            [Op.in]: course.Topics.map((topic) => topic.id),
                        },
                        is_completed: true,
                    },
                });

                const completedTopicsCount = completedTopics.length;
                const progressPercentage = totalTopics > 0 ? (completedTopicsCount / totalTopics) * 100 : 0;

                return {
                    id: course.id,
                    title: course.title,
                    description: course.description,
                    totalTopics,
                    completedTopics: completedTopicsCount,
                    progressPercentage,
                };
            })
        );

        // Filter out any null courses (if any)
        const filteredCourses = courses.filter((course) => course !== null);

        res.json({courses: filteredCourses});
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({message: 'Server error'});
    }
};

exports.getCourseDetail = async (req, res) => {
    const userId = req.user.id;
    const courseId = req.params.courseId;
    console.log('Fetching course details for:', courseId);
    console.log('User ID:', userId);

    try {
        // Fetch the course with its topics
        const course = await Course.findByPk(courseId, {
            include: {
                model: Topic,
                attributes: ['id', 'title', 'content'],
            },
        });

        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        // Fetch completed topics for the user in this course
        const completedTopics = await StudentTopicProgress.findAll({
            where: {
                user_id: userId,
                topic_id: {
                    [Op.in]: course.Topics.map((topic) => topic.id),
                },
                is_completed: true,
            },
            attributes: ['topic_id'],
        });

        const completedTopicIds = completedTopics.map((progress) => progress.topic_id);

        // Mark each topic as completed or not
        const topics = course.Topics.map((topic) => {
            const isCompleted = completedTopicIds.includes(topic.id);
            return {...topic.get({plain: true}), isCompleted};
        });

        // Calculate progress
        const totalTopics = topics.length;
        const completedTopicsCount = completedTopicIds.length;
        const progressPercentage = totalTopics > 0 ? (completedTopicsCount / totalTopics) * 100 : 0;

        res.json({
            course: {
                id: course.id,
                title: course.title,
                description: course.description,
                topics,
            },
            progress: {
                totalTopics,
                completedTopics: completedTopicsCount,
                progressPercentage,
            },
        });
    } catch (error) {
        console.error('Error fetching course detail:', error);
        res.status(500).json({message: 'Server error'});
    }
};

// New function added
exports.getCourseDetailSimple = async (req, res) => {
    const {courseId} = req.params;

    try {
        // Fetch the course with associated topics
        const course = await Course.findByPk(courseId, {
            include: [{model: Topic}],
        });

        if (!course) {
            return res.status(404).json({error: 'Course not found.'});
        }

        res.json({course});
    } catch (error) {
        console.error('Error fetching course details:', error);
        res.status(500).json({error: 'Failed to fetch course details.'});
    }
};
