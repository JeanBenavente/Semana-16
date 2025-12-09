const TipoMedic = require('../models/TipoMedic');

exports.getAll = async (req, res) => {
  try {
    const tipos = await TipoMedic.findAll();
    res.json(tipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

