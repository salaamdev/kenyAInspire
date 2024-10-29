// controllers/courseController.js

const {Course, Enrollment, Topic} = require('../models'); // Ensure Topic is imported

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

                // TODO: Define how to calculate completedTopicsCount
                // For now, set to 0
                const completedTopicsCount = 0;

                return {
                    id: course.id,
                    title: course.title,
                    description: course.description,
                    totalTopics,
                    completedTopics: completedTopicsCount,
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
