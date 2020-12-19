const { DataTypes } = require('sequelize');
const DB = require('../database/index');

const TypeModel = DB.define('Types',
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  }
);

module.exports =  { TypeModel };
