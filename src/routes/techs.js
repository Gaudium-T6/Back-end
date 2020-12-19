const express = require('express');
const TechsService = require('../services');

function techsApi(app) {

  const techService = new TechsService();

  const router = express.Router();
  app.use('/api/techs', router);

  router.get('/', async function(req, res){
    try {
      console.log('testing techs route');
      const techs =  await techService.getTechs();
        res.json({
          data: techs,
          message: 'Techs retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Techs retrieved',
        log: e
      });

    }
  });

}

module.exports = techsApi;
