const express = require('express');
const ProfilesService = require('../services/profiles');

function profilesApi(app) {

  const profilesService = new ProfilesService();

  const router = express.Router();
  app.use('/api/profiles', router);

  router.get('/', async function(req, res){
    try {
      const profiles =  await profilesService.getProfiles();
        res.json({
          data: profiles,
          message: 'Profiles retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Profiles retrieved',
        log: e
      });

    }
  });

}

module.exports = profilesApi;
