const express = require('express');

const server = express();

const usersRouter = require('./data/helpers/userRouter');

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Ready to go');
});

server.use('/api/users', usersRouter);

module.exports = server;