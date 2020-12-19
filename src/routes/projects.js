const express = require('express');
const ProjectsService = require('../services');

function projectsApi(app) {

  const projectService = new ProjectsService();

  const router = express.Router();
  app.use('/api/projects', router);

  router.get('/', async function(req, res, next){
    try {
      console.log('testing');
      const projects =  await projectService.getProjects();
        res.json({
          data: projects,
          message: 'Projects retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Projects retrieved',
        log: e
      });

    }
  });

}

module.exports = projectsApi;