const { DataTypes } = require('sequelize');
const DB = require('../database/index');

const ToolModel = DB.define('Tools', {
  name: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  }
}, {
  freezeTableName: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports =  { ToolModel };