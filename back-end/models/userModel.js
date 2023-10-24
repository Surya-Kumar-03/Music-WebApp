const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	uid: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	likedSongs: {
		type: [String],
		default: [],
	},
});

module.exports = mongoose.model('User', userSchema);
