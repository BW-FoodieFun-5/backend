const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware');
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const restaurantRouter = require('../restaurants/restaurants-router');
const menuItemRouter = require('../menuItems/menuItems-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/restaurants', restaurantRouter);
server.use('/api/menu', menuItemRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "It's working!", dbenv: process.env.DB_ENV });
});

module.exports = server;