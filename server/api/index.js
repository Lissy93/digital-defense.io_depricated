const express = require('express');

const haveIBeenHackedRoute = require('./have-i-been-hacked');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(401);
    res.send('Access to this route is not permitted');
});


router.get('/have-i-been-hacked/:email', haveIBeenHackedRoute);

module.exports = router;