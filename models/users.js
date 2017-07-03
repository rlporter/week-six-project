'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING
  } {});

    User.associate = function (models) {
    User.hasMany(models.User, {foreignKey: 'userId'});
    User.hasMany(models.Like, {foreignKey: 'userID'});
    }
  return Users;
};
