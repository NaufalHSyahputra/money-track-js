'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {typeId: 1, name: 'Gaji', status: 1},
      {typeId: 1, name: 'Bonus', status: 1},
      {typeId: 1, name: 'Lain-lain', status: 1},
      {typeId: 1, name: 'Hadiah', status: 1},
      {typeId: 2, name: 'Makanan & Minuman', status: 1},
      {typeId: 2, name: 'Peralatan Rumah', status: 1},
      {typeId: 2, name: 'Obat-obatan', status: 1},
      {typeId: 2, name: 'Hewan Peliharaan', status: 1},
      {typeId: 2, name: 'Pulsa dan Paket Data', status: 1},
      {typeId: 2, name: 'Topup Game', status: 1},
      {typeId: 2, name: 'Gadget', status: 1}
    ];
    await queryInterface.bulkInsert('categories', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
