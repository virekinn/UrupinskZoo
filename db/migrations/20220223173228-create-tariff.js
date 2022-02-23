'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tariffs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      adults_weekdays: {
        allowNull: false,
        type: Sequelize.STRING
      },
      children_weekdays: {
        allowNull: false,
        type: Sequelize.STRING
      },
      adults_weekend: {
        allowNull: false,
        type: Sequelize.STRING
      },
      children_weekend: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tariffs');
  }
};
