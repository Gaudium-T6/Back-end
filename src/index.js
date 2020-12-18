// Node modules
const express = require('express')
const app = express()
const { config } = require('./config/index')
const sequelize = require('./database/index')

// body parser
app.use(express.json());
// routes
gaudiumApi(app);

//App endpoint
app.listen(config.port, () => {
  sequelize.authenticate().then(() => {
    console.log(`DB conect`);
    console.log(`Listening http://localhost:${config.port}`);
  }).catch(error => {
    console.log(`Error DB ${error}`);
  })
});