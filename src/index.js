const express = require('express');
const { config } = require('./config/index');
const gaudiumApi = require('./routes/index.js');
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./swagger.json');
const projectsApi = require('./routes/projects');
const coursesApi = require('./routes/courses');
const toolsApi = require('./routes/tools');


const app = express();

// api routes
gaudiumApi(app);
projectsApi(app);
coursesApi(app);
toolsApi(app);

// documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

//App endpoint
app.listen(config.port, () => {
  console.log(`running on http://localhost:${config.port}` );
});
