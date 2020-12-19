const session = require('express-session');
const { UserModel } = require('../models/user');


function authenticationApi(app) {
  app.use( session({secret: 'keyboard cat'}));
  app.post('/login', async function (req, res) {
    const { email, password: pass } = req.body;
    if (!email || !pass) {
      res.json({
        error: true,
        message: 'Bad request'
      });
    } else {
      const user = await UserModel.findOne({
        where: {
          email,
          password: pass
        }
      });

      if (!user) {
        res.json({
          error: true,
          message: 'User was not found'
        });
      }

      let { password, ...data} = user.dataValues;

      const responseUser = {
        name: `${data.name} ${data.last_name}`,
        email: data.email,
        discord_user: data.discord_user,
        github_user: data.github_user
      }

      req.session.user = {
        name: responseUser.name,
        id: data.id
      };

      res.status(200).json({
          data: responseUser,
          message: 'User logged'
      });
    }
  });

  app.get('/logout', function (req, res) {
    console.log(req.session);
    req.session.destroy();
    res.send('logout successfully')
  });
}

module.exports = authenticationApi;
