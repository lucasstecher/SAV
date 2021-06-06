const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientesController');

router.get("/clientes", controller.index);
router.post("/salvarcliente", controller.store);

module.exports = router;