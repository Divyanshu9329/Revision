'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Query extends Model {
    static associate(models) {
      Query.belongsTo(models.User,{
        foreignKey : "queryby", as:"student"
      });
    }
  }
  Query.init({
    subject: DataTypes.STRING,
    query_text: DataTypes.STRING,
    status: DataTypes.STRING,
    isactive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Query',
  });
  return Query;
};