const session = require('express-session');
const { UserModel } = require('../models/user');


function authenticationApi(app) {
  app.use( session({secret: 'keyboard cat'}));
  app.post('/login', async function (req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      res.send('login failed');
    } else {
      const user = await UserModel.findOne({
        where: {
          email: username,
          password
        }
      });

      console.log(user);

      if (!user) {
        res.send('user not found');
      }

      res.send('login success');
      req.session.user = user;
      // if(req.query.username === "jose" || req.query.password === "hunter2") {
      // req.session.user = "";
      // req.session.admin = true;
      // req.session.admin = true;
      // }
    }
  });

  app.get('/logout', function (req) {
    req.session.destroy();
  });
}

module.exports = authenticationApi;
