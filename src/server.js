'use strict';

// 3rd party modules
const express = require('express');
const app = express();
const mongoose = require('mongoose'); // mongo interface module

const MONGODB_URI = 'mongodb://localhost:27017/XXXXXX'; // set up connecting 'string' for connecting to MongoDB

const options = { newUrlParser: true, useUnifiedTopology: true } // will explain later

// connect to the XXXXX database
mongoose.connect(MONGODB_URI, options);

// internal modules
const notFound = require('../src/error-handlers/404');
const internalError = require('../src/error-handlers/500');
const logger = require('./middleware/logger');

// routers
const clothRoutes = require('./routes/clothes');


// global middleware
app.use(express.json());
app.use(logger);
app.use(clothRoutes);

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
