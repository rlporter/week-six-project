'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    mid: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    messageText: DataTypes.STRING
  }, {});

  Message.associate = function (models){
    Message.belongsTo(models.User, {foreignKey: 'userID'});
    Message.hasMany(models.Like, {through: 'Likes', foreignKey: 'messageID', otherKey: 'userID'});

  return Messages;
};
