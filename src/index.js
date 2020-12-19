const express = require('express');
const { config } = require('./config/index');
const gaudiumApi = require('./routes/index.js');
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./swagger.json');
const projectsApi = require('./routes/projects');
const coursesApi = require('./routes/courses');


const app = express();

// api routes
projectsApi(app);
coursesApi(app);
gaudiumApi(app);

// documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

//App endpoint
app.listen(config.port, () => {
  console.log(`running on http://localhost:${config.port}` );
});
