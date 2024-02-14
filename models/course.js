'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    course_name: DataTypes.STRING,
    grade_level: DataTypes.STRING,
    teacher_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};

Course.belongsTo(Teacher, { foreignKey: 'teacher_id' });

module.exports = Course;