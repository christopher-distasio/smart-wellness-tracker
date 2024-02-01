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
        timestamps: false
      },
      food_name: {
        type: DataTypes.STRING,
        allowNull: false,
        timestamps: false
      },
      calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
        timestamps: false
      },
      entry_date: {
        type: DataTypes.DATE,
        allowNull: false,
        timestamps: false
      },
    },
    {
      sequelize,
      modelName: "FoodEntry",
      tableName: "food_entries",
      underscored: true,
      timestamps: false
    }
  );

  return FoodEntry;
};
