const { DataTypes } = require('sequelize');
const DbConnection = require('../database/index');

const ProfileModel = DbConnection.define('Profiles', {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports =  { ProfileModel };
