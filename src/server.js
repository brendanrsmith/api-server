'use strict';

// 3rd party modules
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // mongo interface module
const dotenv = require('dotenv');

dotenv.config();

// connect to the database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/food'; // set up connecting 'string' for connecting to entire MongoDB
const options = { useNewUrlParser: true, useUnifiedTopology: true } // will explain later
mongoose.connect(MONGODB_URI, options);


// internal modules
const notFound = require('../src/error-handlers/404');
const internalError = require('../src/error-handlers/500');
const logger = require('./middleware/logger');

// routers
const clothRoutes = require('./routes/clothes');
const foodRoutes = require('./routes/food');
const todoRoutes = require('./routes/todo');

// global middleware
app.use(express.json());
app.use(logger);
app.use(clothRoutes);
app.use(foodRoutes);
app.use(todoRoutes);

// 404 handler
app.use('*', notFound);

// 500 internal server error handler
app.use(internalError);

// module export for index.js
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`we are up on port ${port}`);
    });
  },
};
