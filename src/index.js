const express = require('express');
const { config } = require('./config/index');
const gaudiumApi = require('./routes/index.js');
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./swagger.json');
const projectsApi = require('./routes/projects');
const coursesApi = require('./routes/courses');
const toolsApi = require('./routes/tools');
const techsApi = require('./routes/techs');
const typesApi = require('./routes/types');
const usersApi = require('./routes/users');
const profilesApi = require('./routes/profile');
const authenticationApi = require('./routes/auth');
const cors = require('cors')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// cors
app.use(cors());

// api routes
authenticationApi(app);
gaudiumApi(app);
projectsApi(app);
coursesApi(app);
toolsApi(app);
techsApi(app);
typesApi(app);
usersApi(app);
profilesApi(app);


// documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

//App endpoint
app.listen(config.port, () => {
  console.log(`running on http://localhost:${config.port}` );
});
