'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    static associate(models) {
      Document.belongsTo(models.User,{
        foreignKey : "uploadby"
      })
    }
  }
  Document.init({
    title: DataTypes.STRING,
    filepath: DataTypes.STRING,
    subject: DataTypes.STRING,
    isapproved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};