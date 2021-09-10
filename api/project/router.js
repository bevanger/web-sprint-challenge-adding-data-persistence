const express = require('express');
const router = express.Router();
const Projects = require('./model');


router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const project = req.body
    Projects.add(project)
        .then((newProject) => {
            res.json(newProject)
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