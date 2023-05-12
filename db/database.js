const mongoose = require('mongoose');


const connectDB = async function main() {
  await mongoose.connect('mongodb://localhost:27017/nodejs');
  
}

module.exports = connectDB;