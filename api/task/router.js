const express = require('express');
const Tasks = require("./model");
const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.get()
    .then((task) => {
      res.json(task);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const data = req.body;
  Tasks.create(data)
    .then((newPro) => {
      res.json(newPro);
    })
    .catch(next);
});


module.exports = router;
