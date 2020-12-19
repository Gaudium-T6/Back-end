const express = require('express');
const ProjectsService = require('../services/projects');

function projectsApi(app) {

  const projectService = new ProjectsService();

  const router = express.Router();
  app.use('/api/projects', router);

  router.get('/', async function(req, res){
    try {
      const projects =  await projectService.getProjects();
        res.json({
          data: projects,
          message: 'Projects retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Projects fail',
        log: e
      });

    }
  });

}

module.exports = projectsApi;