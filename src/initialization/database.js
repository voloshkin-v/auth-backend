const mongoose = require('mongoose');

const { MONGODB_URL } = require('~/configs/config');

const setupDatabase = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log('Database is connected');
};

module.exports = setupDatabase;
