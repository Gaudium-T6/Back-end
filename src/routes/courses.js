const express = require('express');
const CoursesService = require('../services/courses');

function coursesApi(app) {

  const coursesService = new CoursesService();

  const router = express.Router();
  app.use('/api/courses', router);

  router.get('/', async function(req, res){
    try {
      const courses =  await coursesService.getCourses();
        res.json({
          data: courses,
          message: 'Courses retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Courses retrieved',
        log: e
      });

    }
  });

}

module.exports = coursesApi;