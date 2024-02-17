'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Announcement.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    target_audience: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Announcement',
  });
  return Announcement;
};
