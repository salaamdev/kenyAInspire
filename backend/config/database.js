// config/database.js

const {Sequelize} = require('sequelize');

// Create a new Sequelize instance for SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Path to the SQLite database file
    logging: false, // Disable logging; set to console.log to see SQL queries
});

module.exports = sequelize;
