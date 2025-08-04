'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {msg:"Name cant be Null"},
        notEmpty: {msg: "Name cant be Empty."}
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {msg:"Email cant be Null"},
        notEmpty: {msg: "Email cant be Empty."},
        isEmail: {msg:"Enter A Correct email"}
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {msg:"password cant be Null"},
        notEmpty: {msg: "Password cant be Empty."}
      }
    },
    role: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {msg:"role cant be Null"},
        notEmpty: {msg: "role cant be Empty."}
      }
    },
    department: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull : {msg:"department cant be Null"},
        notEmpty: {msg: "department cant be Empty."}
      }
    },
    active_status: DataTypes.BOOLEAN
  }, { 
    sequelize,
    modelName: 'User',
  });
  return User;
};