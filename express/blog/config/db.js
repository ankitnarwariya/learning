// db.js
const mongoose = require('mongoose');

async function dbConnection() {
    await mongoose.connect('mongodb://localhost:27017/blog');
}

module.exports = dbConnection;
