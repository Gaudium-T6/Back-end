const { DataTypes } = require('sequelize');
const DbConnection = require('../database/index');

const Tech = DbConnection.define('Techs',
  {
    name: {
      type: DataTypes.STRING,
    },
    aliases: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    freezeTableName: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  }
);

module.exports =  { Tech };
