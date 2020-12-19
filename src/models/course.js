const { DataTypes } = require('sequelize');
const DbConnection = require('../database/index');

const CourseModel = DbConnection.define('Courses', {
  name: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  freezeTableName: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at',
});

module.exports =  { CourseModel };