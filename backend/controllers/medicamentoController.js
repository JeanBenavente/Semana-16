const Medicamento = require('../models/Medicamento');

exports.create = async (req, res) => {
  try {
    const data = {
      descripcionMed: req.body.descripcionMed,
      precioVentaUni: parseFloat(req.body.precioVentaUni),
      stock: parseInt(req.body.stock),
      CodTipoMed: parseInt(req.body.CodTipoMed),
      CodEspec: parseInt(req.body.CodEspec),
    };
    const nuevo = await Medicamento.create(data);
    // Convertir precioVentaUni de DECIMAL (string) a número
    const nuevoFormateado = {
      ...nuevo.toJSON(),
      precioVentaUni: parseFloat(nuevo.precioVentaUni) || 0
    };
    res.status(201).json(nuevoFormateado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const codMedicamento = parseInt(req.params.CodMedicamento);
    if (isNaN(codMedicamento)) {
      return res.status(400).json({ error: "Código de medicamento inválido" });
    }

    const data = {
      descripcionMed: req.body.descripcionMed,
      precioVentaUni: parseFloat(req.body.precioVentaUni),
      stock: parseInt(req.body.stock),
      CodTipoMed: parseInt(req.body.CodTipoMed),
      CodEspec: parseInt(req.body.CodEspec),
    };
    const actualizado = await Medicamento.update(data, {
      where: { CodMedicamento: codMedicamento }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: "No encontrado" });
    res.json({ message: "Actualizado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const codMedicamento = parseInt(req.params.CodMedicamento);
    if (isNaN(codMedicamento)) {
      return res.status(400).json({ error: "Código de medicamento inválido" });
    }
    const eliminado = await Medicamento.destroy({ where: { CodMedicamento: codMedicamento } });
    if (!eliminado) return res.status(404).json({ message: "No encontrado" });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const medicamentos = await Medicamento.findAll({ include: ['Especialidad', 'TipoMedic'] });
    // Convertir precioVentaUni de DECIMAL (string) a número
    const medicamentosFormateados = medicamentos.map(med => ({
      ...med.toJSON(),
      precioVentaUni: parseFloat(med.precioVentaUni) || 0
    }));
    res.json(medicamentosFormateados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const codMedicamento = parseInt(req.params.CodMedicamento);
    if (isNaN(codMedicamento)) {
      return res.status(400).json({ error: "Código de medicamento inválido" });
    }
    const medicamento = await Medicamento.findByPk(codMedicamento, {
      include: ['Especialidad', 'TipoMedic']
    });
    if (!medicamento) return res.status(404).json({ message: "No encontrado" });
    // Convertir precioVentaUni de DECIMAL (string) a número
    const medicamentoFormateado = {
      ...medicamento.toJSON(),
      precioVentaUni: parseFloat(medicamento.precioVentaUni) || 0
    };
    res.json(medicamentoFormateado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
