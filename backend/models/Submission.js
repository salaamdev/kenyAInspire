// Submission.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Assignment = require('./Assignment');

const Submission = sequelize.define(
    'Submission',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content: DataTypes.TEXT,
        grade: DataTypes.FLOAT,
        feedback: DataTypes.TEXT,
        submittedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        studentId: DataTypes.INTEGER,
        assignmentId: DataTypes.INTEGER,
    },
    {
        tableName: 'submissions',
        timestamps: false,
    }
);

Submission.belongsTo(User, {foreignKey: 'studentId'});
Submission.belongsTo(Assignment, {foreignKey: 'assignmentId'});

module.exports = Submission;
