const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Especialidad = require('./Especialidad');
const TipoMedic = require('./TipoMedic');

const Medicamento = sequelize.define('Medicamento', {
  CodMedicamento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcionMed: { type: DataTypes.STRING(150), allowNull: false },
  precioVentaUni: { type: DataTypes.DECIMAL(10, 2) },
  stock: { type: DataTypes.INTEGER },
  CodTipoMed: { type: DataTypes.INTEGER },
  CodEspec: { type: DataTypes.INTEGER },
  // Otros campos que no vamos a usar, pueden quedar vacíos si no los envías
});

// Relaciones
Medicamento.belongsTo(Especialidad, { foreignKey: 'CodEspec', as: 'Especialidad' });
Medicamento.belongsTo(TipoMedic, { foreignKey: 'CodTipoMed', as: 'TipoMedic' });

module.exports = Medicamento;
