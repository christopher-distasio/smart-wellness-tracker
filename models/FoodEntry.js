"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FoodEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodEntry.init(
    {
      food_entry_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      food_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      calories: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      entry_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "FoodEntry",
      tableName: "food_entries",
      underscored: true,
    }
  );

  return FoodEntry;
};
