// models/index.js

const sequelize = require('../config/database');
const {DataTypes} = require('sequelize');

// Import existing models
const User = require('./user');
const Course = require('./course');
const Topic = require('./topic');
const Enrollment = require('./enrollment');
const Announcement = require('./announcement');
const OTP = require('./otp');
const Flashcard = require('./flashcard'); // Newly added

// Define associations

// User and Enrollment: One-to-Many
User.hasMany(Enrollment, {foreignKey: 'user_id'});
Enrollment.belongsTo(User, {foreignKey: 'user_id'});

// Course and Enrollment: One-to-Many
Course.hasMany(Enrollment, {foreignKey: 'course_id'});
Enrollment.belongsTo(Course, {foreignKey: 'course_id'});

// Course and Topic: One-to-Many
Course.hasMany(Topic, {foreignKey: 'course_id'});
Topic.belongsTo(Course, {foreignKey: 'course_id'});

// Course and Flashcard: One-to-Many
Course.hasMany(Flashcard, {foreignKey: 'course_id'});
Flashcard.belongsTo(Course, {foreignKey: 'course_id'});

// Export models
module.exports = {
    sequelize,
    User,
    Course,
    Topic,
    Enrollment,
    Announcement,
    OTP,
    Flashcard, // Newly exported
};
