const { config } = require('../config/index');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

if (config.dev) {
  sequelize.authenticate()
  .then(()=> {
    console.log('Connection has been established successfully.');
  })
  .catch((error)=> {
    console.error('Unable to connect to the database:', error);
  });
}

module.exports = sequelize;