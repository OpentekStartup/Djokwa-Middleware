'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lunch_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lunch_menu.init({
    breakfast: DataTypes.STRING,
    date: DataTypes.DATE,
    lunch: DataTypes.STRING,
    dinner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lunch_menu',
  });
  return Lunch_menu;
};