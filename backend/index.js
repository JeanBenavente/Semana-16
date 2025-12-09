const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const medicamentoRoutes = require('./routes/medicamentoRoutes');
const tipoMedicRoutes = require('./routes/tipoMedicRoutes');
const especialidadRoutes = require('./routes/especialidadRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/medicamentos', medicamentoRoutes);
app.use('/api/tipos', tipoMedicRoutes);
app.use('/api/especialidades', especialidadRoutes);

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3001, () => console.log('Servidor corriendo en http://localhost:3001'));
  })
  .catch(err => console.error('Error al sincronizar base de datos:', err));
