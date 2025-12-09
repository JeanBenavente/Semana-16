const { Sequelize } = require('sequelize');

// Usamos las variables de entorno para configurar la conexión
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false, // Puedes desactivar el logging si no lo necesitas
});

module.exports = sequelize;
