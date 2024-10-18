// models/index.js

const sequelize = require('../config/database');
const {DataTypes} = require('sequelize');

// Import model definitions
const User = require('./user');
const Course = require('./course');
const Topic = require('./topic');
const Enrollment = require('./enrollment');
const Progress = require('./progress');
const StudentTopicProgress = require('./studentTopicProgress');
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

// User and Progress: One-to-Many
User.hasMany(Progress, {foreignKey: 'user_id'});
Progress.belongsTo(User, {foreignKey: 'user_id'});

// Course and Progress: One-to-Many
Course.hasMany(Progress, {foreignKey: 'course_id'});
Progress.belongsTo(Course, {foreignKey: 'course_id'});

// Course and Topic: One-to-Many
Course.hasMany(Topic, {foreignKey: 'course_id'});
Topic.belongsTo(Course, {foreignKey: 'course_id'});

// User and StudentTopicProgress: One-to-Many
User.hasMany(StudentTopicProgress, {foreignKey: 'user_id'});
StudentTopicProgress.belongsTo(User, {foreignKey: 'user_id'});

// Topic and StudentTopicProgress: One-to-Many
Topic.hasMany(StudentTopicProgress, {foreignKey: 'topic_id'});
StudentTopicProgress.belongsTo(Topic, {foreignKey: 'topic_id'});

// Export models
module.exports = {
    sequelize,
    User,
    Course,
    Topic,
    Enrollment,
    Progress,
    StudentTopicProgress,
    Announcement,
    Event,
    OTP,
};
