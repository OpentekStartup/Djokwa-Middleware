'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date_and_time: DataTypes.DATE,
    location: DataTypes.STRING,
    target_audience: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};

