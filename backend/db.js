require('dotenv').config(); // Esto carga las variables de entorno desde el archivo .env

const { Sequelize } = require('sequelize');

// Usar las variables de entorno para la configuración de la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nombre de la base de datos
  process.env.DB_USER,       // Usuario de la base de datos
  process.env.DB_PASSWORD,   // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Host de la base de datos (Railway)
    port: process.env.DB_PORT, // Puerto de la base de datos
    dialect: 'mysql',          // Tipo de base de datos
    logging: false,            // Desactivar logging
  }
);

module.exports = sequelize;
