const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Especialidad extends Model {}

Especialidad.init({
  CodEspec: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcionEsp: { type: DataTypes.STRING(100), allowNull: false },
}, {
  sequelize,
  modelName: 'Especialidad',
  tableName: 'Especialidad',
  timestamps: false,
});

module.exports = Especialidad;
