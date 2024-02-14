'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parent.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    relationship_to_student: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    contact_information: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};

module.exports = Parent;