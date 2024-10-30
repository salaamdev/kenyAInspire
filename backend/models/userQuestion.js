// models/userQuestion.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Question = require('./question');

const UserQuestion = sequelize.define('UserQuestion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    questionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Question,
            key: 'id',
        },
    },
    answeredAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: 'user_questions',
    timestamps: false,
});

UserQuestion.belongsTo(User, {foreignKey: 'userId'});
UserQuestion.belongsTo(Question, {foreignKey: 'questionId'});

module.exports = UserQuestion;
