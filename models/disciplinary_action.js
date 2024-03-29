'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  class Disciplinary_action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Disciplinary_action.init({
    student_id: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    consequence: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disciplinary_action',
  });
  return Disciplinary_action;
};


Disciplinary_action.belongsTo(Student, { foreignKey: 'student_id' });
