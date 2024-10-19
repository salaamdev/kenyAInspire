// models/user.js

const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define(
  'User',
  {
    // Sequelize automatically adds an 'id' primary key field
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validates email format
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'users',
    timestamps: false, // Disable automatic timestamp fields
  }
);

module.exports = User;
