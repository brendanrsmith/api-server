'use strict';

// 3rd party modules
const express = require('express');
const app = express();

// internal modules

// global middleware

// module export for index.js
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`we are up on port ${port}`);
    });
  },
};
