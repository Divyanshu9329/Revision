'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    static associate(models) {
      Announcement.belongsTo(models.User,{
        foreignKey : "postby"
      })
    }
  }
  Announcement.init({
    title: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Announcement',
  });
  return Announcement;
};