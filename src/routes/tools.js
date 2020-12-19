const express = require('express');
const ToolService = require('../services/tools');

function toolsApi(app) {

  const toolService = new ToolService();

  const router = express.Router();
  app.use('/api/tools', router);

  router.get('/', async function(req, res){
    try {
      const tools =  await toolService.getTools();
        res.json({
          data: tools,
          message: 'Tools retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Tools retrieved',
        log: e
      });

    }
  });

}

module.exports = toolsApi;