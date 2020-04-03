const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/../home.html'));
    // res.render('home');
});

module.exports = router;