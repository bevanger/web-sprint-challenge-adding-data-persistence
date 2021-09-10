const express = require('express');
const Projects = require('./model');

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const project = req.body
    Projects.insert(project)
        .then((newProject) => {
            res.json(newProject)
        })
        .catch(next)
});

module.exports = router;