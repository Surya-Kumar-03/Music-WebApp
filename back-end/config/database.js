const mongoose = require('mongoose');
const dbURI = process.env.MONGO_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true });
    console.log('DB Connected');
    return true;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return false;
  }
}

module.exports = { connectToDatabase };
