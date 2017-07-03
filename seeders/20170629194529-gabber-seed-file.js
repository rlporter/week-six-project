'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
        username: 'John Doe',
        password: 'popsicles!',
        displayName: 'John_D'
      }], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
