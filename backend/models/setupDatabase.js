const createTables = require('./databaseSetup');

createTables().then(() => {
    console.log('Database setup complete');
    process.exit(0);
}).catch((error) => {
    console.error('Database setup failed:', error);
    process.exit(1);
});
