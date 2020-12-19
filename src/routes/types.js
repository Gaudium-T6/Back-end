const express = require('express');
const TypeService = require('../services/types');
const typeController = require('../controllers/type');

function typesApi(app) {

  const typeService = new TypeService();

  const router = express.Router();

  app.use('/api/types', router);

  router.get('/', async function(req, res){
    try {
      const types =  await typeService.getTypes();
        res.json({
          data: types,
          message: 'Types retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Types retrieved',
        log: e
      });

    }
  });

  router.post('/api/type', typeController.newType);

}

module.exports = typesApi;
