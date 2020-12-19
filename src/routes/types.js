const express = require('express');
const TypeService = require('../services/types');

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

  router.post('/api/type', async function(req, res){
    try {
      const data = await typeService.newType(req.body.name);

      if (data == null) {
        const newType = new TypeModel(
          {
            name: req.body.name,
            description: req.body.description,
          }
        );

        //save to DB
        newType.save((err, data) => {
          if (err) return res.json("Something is wrong. Please check.");
          return res.json(data);
        });
      }
      else {
        return res.json(`${req.body.name} Type already exists.`);
      }
    }
    finally {

    }
  });

}

module.exports = typesApi;
