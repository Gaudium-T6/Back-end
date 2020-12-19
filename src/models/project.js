const { Sequelize, DataTypes } = require('sequelize');
const DbConnection = require('../database/index');

const Project = DbConnection.define('Projects', {
  name: {
    type: DataTypes.STRING,
  },
  github_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT
  },
  icon_url: {
    type: DataTypes.STRING
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  production_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  difficult_rating: {
    type: DataTypes.STRING,
  },
  requirements: {
    type: DataTypes.STRING,
  },
  type_id: {
    type: DataTypes.NUMBER
  },
  status_id: {
    type: DataTypes.NUMBER
  },
  user_id: {
    type: DataTypes.NUMBER
  }
}, {
  freezeTableName: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports =  { Project };