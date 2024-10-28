// models/index.js

const sequelize = require('../config/database');
const {DataTypes} = require('sequelize');

// Import model definitions
const User = require('./user');
const Course = require('./course');
const Topic = require('./topic');
const Enrollment = require('./enrollment');
const Announcement = require('./announcement');
const Event = require('./event');
const OTP = require('./otp');

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


// Export models
module.exports = {
    sequelize,
    User,
    Course,
    Topic,
    Enrollment,
    Announcement,
    Event,
    OTP,
};
