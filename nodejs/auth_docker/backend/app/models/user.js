'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {
        foreignKey: "userId", 
        as: "profile", 
        allowNull: true
      })
    }
  };
  User.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.ENUM('true', 'false'),
      isVerified: DataTypes.ENUM('true', 'false'),
      admin_type: DataTypes.ENUM('1', '2', '3')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};