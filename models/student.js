'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    grade_level: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    homeroom_class_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};