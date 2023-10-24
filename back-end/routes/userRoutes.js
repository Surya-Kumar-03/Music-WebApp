const express = require('express');
const router = express.Router();
const {handleLogin, handleLike} = require('../controllers/userController');

router.post('/login', (req, res) => {
	handleLogin(req, res);
});

router.patch('/likeSong', (req, res) => {
	handleLike(req, res);
});

module.exports = router;
