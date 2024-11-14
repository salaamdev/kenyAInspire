const {Student, Assignment, Submission} = require('../models');
const {Op} = require('sequelize');

// Get Recent Activity
exports.getRecentActivity = async (req, res) => {
    try {
        const activities = await Submission.findAll({
            order: [['submittedAt', 'DESC']],
            limit: 10,
            include: [
                {model: Student, attributes: ['name']},
                {model: Assignment, attributes: ['title']}
            ]
        });

        const assignments = await Assignment.findAll({
            where: {
                dueDate: {
                    [Op.gte]: new Date()
                }
            },
            order: [['dueDate', 'ASC']]
        });

        const students = await Student.findAll({
            attributes: ['name', 'averageGrade']
        });

        res.json({success: true, students, assignments, activities});
    } catch (error) {
        console.error('Error fetching recent activity:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Get Assignments
exports.getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json({success: true, assignments});
    } catch (error) {
        console.error('Error fetching assignments:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Create Assignment
exports.createAssignment = async (req, res) => {
    try {
        const {title, dueDate, description} = req.body;
        const newAssignment = await Assignment.create({
            title,
            dueDate,
            description,
            instructorId: req.user.id // Track which instructor created it
        });

        res.status(201).json({success: true, assignment: newAssignment});
    } catch (error) {
        console.error('Error creating assignment:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Get Submissions for Assignment
exports.getSubmissions = async (req, res) => {
    try {
        const {assignmentId} = req.params;
        const submissions = await Submission.findAll({
            where: {assignmentId},
            include: {model: Student, attributes: ['name']}
        });

        res.json({success: true, submissions});
    } catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Get Single Submission
exports.getSubmission = async (req, res) => {
    try {
        const {submissionId} = req.params;
        const submission = await Submission.findByPk(submissionId, {
            include: [
                {model: Student, attributes: ['name']},
                {model: Assignment, attributes: ['title']}
            ]
        });

        if (!submission) {
            return res.status(404).json({success: false, message: 'Submission not found'});
        }

        res.json({success: true, submission});
    } catch (error) {
        console.error('Error fetching submission:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Submit Grade
exports.submitGrade = async (req, res) => {
    try {
        const {submissionId} = req.params;
        const {grade, feedback} = req.body;

        const submission = await Submission.findByPk(submissionId);
        if (!submission) {
            return res.status(404).json({success: false, message: 'Submission not found'});
        }

        submission.grade = grade;
        submission.feedback = feedback;
        await submission.save();

        res.json({success: true, message: 'Grade submitted'});
    } catch (error) {
        console.error('Error submitting grade:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Get Dashboard Data
exports.getDashboard = async (req, res) => {
    try {
        const recentActivities = await this.getRecentActivity(req, res);
        const totalAssignments = await Assignment.count();
        const totalSubmissions = await Submission.count();

        res.json({
            success: true,
            data: {
                recentActivities,
                totalAssignments,
                totalSubmissions
            }
        });
    } catch (error) {
        console.error('Error fetching dashboard:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Get Upcoming Assignments
exports.getUpcomingAssignments = async (req, res) => {
    try {
        const upcomingAssignments = await Assignment.findAll({
            where: {
                dueDate: {
                    [Op.gte]: new Date()
                }
            },
            order: [['dueDate', 'ASC']]
        });

        res.json({success: true, assignments: upcomingAssignments});
    } catch (error) {
        console.error('Error fetching upcoming assignments:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Get Class Performance
exports.getClassPerformance = async (req, res) => {
    try {
        const students = await Student.findAll({
            include: [{
                model: Submission,
                include: [Assignment]
            }]
        });

        const studentsData = students.map(student => ({
            name: student.name,
            averageGrade: calculateStudentAverage(student.Submissions)
        }));

        res.json({success: true, students: studentsData});
    } catch (error) {
        console.error('Error fetching class performance:', error);
        res.status(500).json({success: false, message: error.message});
    }
};

// Helper Function to Calculate Student Average Grade
const calculateStudentAverage = (submissions) => {
    if (!submissions || submissions.length === 0) return 0;
    const sum = submissions.reduce((acc, sub) => acc + (sub.grade || 0), 0);
    return +(sum / submissions.length).toFixed(2);
};
