const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Assignment = sequelize.define(
    'Assignment',
    {
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'instructors',
                key: 'id'
            }
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'assignments',
        timestamps: false,
    }
);

module.exports = Assignment;
