// models/index.js

const sequelize = require('../config/database');
const {DataTypes} = require('sequelize');

// Import remaining model definitions
const User = require('./user');
const Announcement = require('./announcement');
const OTP = require('./otp');

// Define associations if any (currently none)
// User.hasMany(OTP, {foreignKey: 'email', sourceKey: 'email'});
// OTP.belongsTo(User, {foreignKey: 'email', targetKey: 'email'});

// Export models
module.exports = {
    sequelize,
    User,
    Announcement,
    OTP,
};
