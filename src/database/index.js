const { config } = require('../config/index');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql'
})

module.exports = sequelize;