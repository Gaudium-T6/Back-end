const { DataTypes } = require('sequelize');
const DB = require('../database/index');

const StatusModel = DB.define('Statuses', {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  }
}, {
  freezeTableName: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports =  { StatusModel };