const express = require('express');

const haveIBeenHackedRoute = require('./have-i-been-hacked');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

router.get('/', (req, res) => {
    res.status(401);
    res.send('Access to this route is not permitted');
});


router.get('/have-i-been-hacked/:email', haveIBeenHackedRoute);

module.exports = router;