const { config } = require('../config/index');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`mysql://${config.dbUser}:${config.dbPassword}${config.dbHost}/${config.dbName}?reconnect=true`);

module.exports = sequelize;