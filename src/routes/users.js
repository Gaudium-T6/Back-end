const express = require('express');
const UsersService = require('../services/users');

function usersApi(app) {

  const usersService = new UsersService();

  const router = express.Router();
  app.use('/api/users', router);

  router.get('/', async function(req, res){
    try {
      const users =  await usersService.getUsers();
        res.json({
          data: users,
          message: 'Users retrieved'
        });
    }  catch (e) {
      res.json({
        error: true,
        message: 'Users retrieved',
        log: e
      });

    }
  });

}

module.exports = usersApi;
