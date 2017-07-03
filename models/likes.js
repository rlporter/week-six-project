'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {
    like: DataTypes.BOOLEAN,
    messageID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {});

  Like.associate = function (models){
    Like.belongsTo(models.User, {through: 'Messages', foreignKey: 'messageID', otherKey: 'userID'});

  return Likes;
};
