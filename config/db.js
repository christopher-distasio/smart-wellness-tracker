// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_and_fitness', DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disables logging for a cleaner console. Set to true or remove for development debugging.
});

module.exports = sequelize;
