// models/index.js
const sequelize = require('../config/database');
const User = require('./user');
const Announcement = require('./announcement');
const OTP = require('./otp');
const Question = require('./question');
const UserQuestion = require('./userQuestion');
const Student = require('./Student');
const Assignment = require('./Assignment');
const Submission = require('./Submission');
const LessonPlan = require('./lessonPlan');

// Define associations
Student.hasMany(Submission, {
    foreignKey: {
        name: 'studentId',
        allowNull: false
    }
});
Submission.belongsTo(Student, {
    foreignKey: {
        name: 'studentId',
        allowNull: false
    }
});

Assignment.hasMany(Submission, {
    foreignKey: {
        name: 'assignmentId',
        allowNull: false
    }
});
Submission.belongsTo(Assignment, {
    foreignKey: {
        name: 'assignmentId',
        allowNull: false
    }
});

User.belongsToMany(Question, {through: UserQuestion, foreignKey: 'userId'});
Question.belongsToMany(User, {through: UserQuestion, foreignKey: 'questionId'});

module.exports = {
    sequelize,
    User,
    Announcement,
    OTP,
    Question,
    UserQuestion,
    Student,
    Assignment,
    Submission,
    LessonPlan
};