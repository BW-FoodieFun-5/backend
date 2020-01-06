const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware');
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const restaurantRouter = require('../restaurants/RestaurantRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/restaurants', restaurantRouter);

server.get('/', (req, res) => {
    res.send("It's working!");
});

module.exports = server;