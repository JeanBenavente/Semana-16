const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_Farmacia', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
