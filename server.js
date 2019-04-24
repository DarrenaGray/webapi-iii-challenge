const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')

const server = express();

const usersRouter = require('./data/helpers/userRouter');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res) => {
    res.send('Ready to go');
});

server.use('/api/users', usersRouter);

module.exports = server;