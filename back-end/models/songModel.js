const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  // Song schema definition
});

module.exports = mongoose.model('Song', songSchema);
