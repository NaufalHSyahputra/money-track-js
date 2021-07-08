'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {name: 'Pemasukan'},
      {name: 'Pengeluaran'}
    ]
    await queryInterface.bulkInsert('types', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('types', null, {})
  }
};
