const express = require('express');

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ message: 'working', status: 200 })
});

router.post('/', (req, res, next) => {
    res.json({ message: 'working', status: 200 })
});


module.exports = router;
