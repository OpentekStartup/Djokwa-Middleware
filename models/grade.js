'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grade.init({
    student_id: DataTypes.STRING,
    grade: DataTypes.STRING,
    course_id: DataTypes.STRING,
    date: DataTypes.DATE,
    teacher_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grade',
  });
  return Grade;
};

Grade.belongsTo(Student, { foreignKey: 'student_id' });
Grade.belongsTo(Course, { foreignKey: 'course_id' });
Grade.belongsTo(Teacher, { foreignKey: 'teacher_id' });

module.exports = Grade;