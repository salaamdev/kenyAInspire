// models/index.js

const sequelize = require('../config/database');
const User = require('./user');
const Announcement = require('./announcement');
const OTP = require('./otp');
const Question = require('./question');
const UserQuestion = require('./userQuestion');

// Define associations
User.belongsToMany(Question, {through: UserQuestion, foreignKey: 'userId'});
Question.belongsToMany(User, {through: UserQuestion, foreignKey: 'questionId'});

module.exports = {
    sequelize,
    User,
    Announcement,
    OTP,
    Question,
    UserQuestion,
};
