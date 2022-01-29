'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, {foreignKey: "id", as: "user"})
    }
  };
  Profile.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM('0', '1'),
      defaultValue: '1'
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};