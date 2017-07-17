Tables & Columns:
CREATED//Users: id: PK integer, username: string, password: string, displayName: string

CREATED//Messages: id: PK integer, userID: FK[users: id], messageText: string(140)

CREATED//Likes: id: PK integer, like: boolean, messageID: FK[messages: id], userID: FK[users: id]

Update createdAt & updatedAt Columns:

//defaultValue: Sequelize.fn('NOW')
//queryInterface.changeColumn();

Associations:
A user HasMany messages:
In user.js//User.hasMany(Message, {foreignKey:'userID'});

A user HasMany likes:
In user.js//User.hasMany(Like, {foreignKey: 'userID'});

A message BelongsTo one user:
In message.js//Message.belongsTo(User, {foreignKey: 'userID'});

A message HasMany likes (by many users):
In message.js//Message.hasMany(Like, {through: 'Likes', foreignKey: 'messageID', otherKey: 'userID'});

A like BelongsToMany users:
In like.js//Like.belongsTo(User, {through: 'Messages', foreignKey: 'messageID', otherKey: 'userID'});

/ module.exports = function(sequelize, DataTypes) {
//   var Todo = sequelize.define('Todo', {
//     body: {
//       text: DataTypes.STRING,
//       allowNull: false
//     }
//   }, {});
//
//   Todo.associate = function (models) {
//     Todo.belongsTo(models.User, {foreignKey: 'userId'});
//   }
//   return Todo;
// };
