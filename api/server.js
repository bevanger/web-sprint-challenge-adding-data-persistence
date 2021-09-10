const express = require('express');
const projectRouter = require('./project/router');
const actionRouter = require('./resource/router');
const taskRouter = require('./task/router');
const server = express();

server.use(express.json());
server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);
server.use('/api/task', taskRouter);

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = server;
