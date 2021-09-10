const express = require('express');
const router = express.Router()
const Tasks = require("./model");

router.get('/', (req, res, next) => {
    Tasks.get()
    .then((task) => {
      res.json(task);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const data = req.body;
  Tasks.add(data)
    .then((newPro) => {
      res.json(newPro);
    })
    .catch(next);
});

router.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
});



module.exports = router;
