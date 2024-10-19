// models/studentTopicProgress.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const StudentTopicProgress = sequelize.define(
    'StudentTopicProgress',
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        topic_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'topics',
                key: 'id',
            },
        },
        is_completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        last_updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'student_topic_progress',
        timestamps: false,
    }
);

module.exports = StudentTopicProgress;
