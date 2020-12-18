const express = require('express');
const { config } = require('./config/index');
const gaudiumApi = require('./routes/index.js');


const app = express();

// routes
gaudiumApi(app);

//App endpoint
app.listen(config.port, () => {
  console.log(`running on http://localhost:${config.port}` );
});
