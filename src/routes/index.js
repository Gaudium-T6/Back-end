const express = require('express');

function gaudiumApi(app) {

  const router = express.Router();
  app.use('/api', router);

  router.get('/', async function(req, res, next){
      res.json({'message':'Hello World'});
  });

}

module.exports = gaudiumApi;