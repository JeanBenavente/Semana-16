const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class TipoMedic extends Model {}

TipoMedic.init({
  CodTipoMed: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcion: { type: DataTypes.STRING(100), allowNull: false },
}, {
  sequelize,
  modelName: 'TipoMedic',
  tableName: 'TipoMedic',
  timestamps: false,
});

module.exports = TipoMedic;
