const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello from the Music Web App Backend Server!');
});

module.exports = router;