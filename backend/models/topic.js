// models/topic.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Topic = sequelize.define(
    'Topic',
    {
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'courses',
                key: 'id',
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
        },
    },
    {
        tableName: 'topics',
        timestamps: false,
    }
);

module.exports = Topic;
