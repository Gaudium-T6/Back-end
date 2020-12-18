const express = require('express');

// App routes modules
const router = express();

function gaudiumApi(app) {
  app.use('/api', router);
}

module.exports = gaudiumApi;
