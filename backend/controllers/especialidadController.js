const Especialidad = require('../models/Especialidad');

exports.getAll = async (req, res) => {
  try {
    const especialidades = await Especialidad.findAll();
    res.json(especialidades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

