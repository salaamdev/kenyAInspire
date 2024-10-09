const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false, // Add this if you are connecting without SSL
});

module.exports = pool;
