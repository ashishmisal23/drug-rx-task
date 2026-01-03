const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 60000,
    bufferCommands: false,
  });

  console.log('MongoDB connected');
};

module.exports = connectDB;
