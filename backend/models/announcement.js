// models/announcement.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Announcement = sequelize.define(
    'Announcement',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'announcements',
        timestamps: false,
    }
);

module.exports = Announcement;
