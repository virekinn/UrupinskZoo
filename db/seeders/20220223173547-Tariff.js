'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tariffs', [{
      adults_weekdays: '100',
      children_weekdays: '80',
      adults_weekend: '150',
      children_weekend: '130',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tariffs', null, {});
  }
};
