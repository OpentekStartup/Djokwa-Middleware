'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Class.init({
    grade_level: DataTypes.STRING,
    subject: DataTypes.STRING,
    teacher_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};

Class.belongsTo(Teacher, { foreignKey: 'teacher_id' });
