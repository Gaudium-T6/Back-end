const express = require('express');
const StatusesService = require('../services/statuses');

function statusesApi(app) {

  const statusesService = new StatusesService();

  const router = express.Router();
  app.use('/api/statuses', router);

  router.get('/', async function(req, res){
    try {
      const statuses =  await statusesService.getStatuses();
        res.json({
          data: statuses,
          message: 'Statuses retrieved'
        });
    } catch (e) {
      res.json({
        error: true,
        message: 'Statuses error',
        log: e
      });

    }
  });

}

module.exports = statusesApi;