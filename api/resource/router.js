const express = require('express');
const Resources = require('./model');
const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    const resource = req.body
    Resources.add(resource)
      .then(newResource => {
          res.json(newResource)
      })
      .catch(next)
});

router.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
});



module.exports = router;
