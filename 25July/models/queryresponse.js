'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QueryResponse extends Model {
    static associate(models) {
      QueryResponse.belongsTo(models.User,{
        foreignKey : "responseby"
      });
      QueryResponse.belongsTo(models.Query,{
        foreignKey : "query"
      });
    }
  }
  QueryResponse.init({
    response_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QueryResponse',
  });
  return QueryResponse;
};