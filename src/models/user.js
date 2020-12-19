const { DataTypes } = require('sequelize');
const DbConnection = require('../database/index');

const UserModel = DbConnection.define('Users', {
  name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  discord_user: {
    type: DataTypes.STRING,
    allowNull: true
  },
  github_user: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  platzi_username: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  level_id: {
    type: DataTypes.NUMBER,
    allowNull: true
  },
}, {
  freezeTableName: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports =  { UserModel };
