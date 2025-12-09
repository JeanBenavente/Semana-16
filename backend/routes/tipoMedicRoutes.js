const express = require('express');
const router = express.Router();
const tipoMedicController = require('../controllers/tipoMedicController');

router.get('/', tipoMedicController.getAll);

module.exports = router;


