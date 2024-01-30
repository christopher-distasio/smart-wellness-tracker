// models/FoodEntry.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class FoodEntry extends Model {}

FoodEntry.init({
  foodName: { type: DataTypes.STRING, allowNull: false },
  calories: { type: DataTypes.INTEGER, allowNull: false },
  entryDate: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
}, {
  sequelize,
  modelName: 'FoodEntry',
  tableName: 'food_entries', // Explicit table name declaration
});

module.exports = FoodEntry;
