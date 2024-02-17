'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attendance.init({
    student_id: DataTypes.STRING,
    present_absent: DataTypes.BOOLEAN,
    reason_for_absence: DataTypes.STRING,allowNull:true,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Attendance',
  });
  return Attendance;
};


Attendace.belongsTo(Student, { foreignKey: 'student_id' });

