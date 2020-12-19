const express = require('express');
const { config } = require('./config/index');
const gaudiumApi = require('./routes/index.js');
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./swagger.json');


const app = express();

// documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
// api routes
gaudiumApi(app);

//App endpoint
app.listen(config.port, () => {
  console.log(`running on http://localhost:${config.port}` );
});
