'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('food_entries', [
      { food_entry_id: 1,
        food_name: 'Apple',
        calories: 52,
        entry_date: new Date(),
      },
      {
        food_entry_id: 2,
        food_name: 'Banana',
        calories: 96,
        entry_date: new Date(),
      },
      {
        food_entry_id: 3,
        food_name: 'Orange',
        calories: 62,
        entry_date: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('food_entries', null, {});
  }
}