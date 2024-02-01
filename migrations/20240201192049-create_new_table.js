'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('food_entries', {
      food_entry_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        timestamps: false
      },
      food_name: {
        type: Sequelize.STRING,
        allowNull: false,
        timestamps: false
      },
      calories: {
        type: Sequelize.INTEGER,
        allowNull: false,
        timestamps: false
      },
      entry_date: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('food_entries');
  }
};