const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { config } = require('./config/index');

// body parser
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
// routes

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});