const { DataTypes } = require('sequelize');
const DB = require('../database/index');

const TechModel = DB.define('Technologies',
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

module.exports =  { TechModel };
