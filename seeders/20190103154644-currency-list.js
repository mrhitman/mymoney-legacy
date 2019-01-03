'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Currency', [{
        name: 'USD',
        symbol: '$'
      },
      {
        name: 'UAH',
        symbol: '₴'
      },
      {
        name: 'RUB',
        symbol: '₽'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};