const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const medicamentoRoutes = require('./routes/medicamentoRoutes');
const tipoMedicRoutes = require('./routes/tipoMedicRoutes');
const especialidadRoutes = require('./routes/especialidadRoutes');

const app = express();

// Permitir CORS desde Vercel y desde localhost para desarrollo
const allowedOrigins = [
  'https://semana16frontend.vercel.app',
  'https://semana16frontend-d32hlmtva-jeans-projects-c7367bbc.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001',
];

app.use(cors({
  origin: (origin, callback) => {
    // permitir peticiones sin origin (ej. Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  }
}));
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
