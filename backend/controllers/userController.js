// controllers/userController.js or a separate script

const {User, Course, Enrollment} = require('../models');

exports.enrollUserInCourse = async (req, res) => {
    const userId = req.user.id;
    const {course_id} = req.body;

    try {
        const course = await Course.findByPk(course_id);
        if (!course) {
            return res.status(404).json({message: 'Course not found'});
        }

        const enrollment = await Enrollment.create({
            user_id: userId,
            course_id: course_id,
        });

        res.status(201).json({message: 'Enrolled successfully', enrollment});
    } catch (error) {
        console.error('Enrollment Error:', error);
        res.status(500).json({message: 'Server error'});
    }
};
