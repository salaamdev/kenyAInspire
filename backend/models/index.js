// models/index.js

const sequelize = require('../config/database');
const {DataTypes} = require('sequelize');

<<<<<<< HEAD
// Import remaining model definitions
=======
// Import existing models
>>>>>>> b5159c762df1ce3d3408838d28cb11c41fa27100
const User = require('./user');
const Announcement = require('./announcement');
const OTP = require('./otp');
const Flashcard = require('./flashcard'); // Newly added

<<<<<<< HEAD
// Define associations if any (currently none)
// User.hasMany(OTP, {foreignKey: 'email', sourceKey: 'email'});
// OTP.belongsTo(User, {foreignKey: 'email', targetKey: 'email'});
=======
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
>>>>>>> b5159c762df1ce3d3408838d28cb11c41fa27100

// Export models
module.exports = {
    sequelize,
    User,
    Announcement,
    OTP,
    Flashcard, // Newly exported
};
