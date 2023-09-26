const mongoose = require("mongoose");

const dbUrl = 'mongodb://127.0.0.1:27017/cubicle';

async function initDatabase() {
    mongoose.set('strictQuery', false);
    
    await mongoose.connect(dbUrl);

    console.log("DB connected!");
} 

module.exports = initDatabase;