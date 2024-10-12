const {Pool} = require('pg');

// Database pool configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'edukenya',
    password: '12345',
    port: 5432,
});

console.log('DB_USER:', 'postgres');
console.log('DB_PASSWORD:', '12345');

module.exports = pool;
// drop postfress database command is 