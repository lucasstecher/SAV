const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientesController');

router.get("/clientes", controller.index);
router.post("/salvarcliente", controller.store);
router.get("/deletarcli/:id", controller.delete);
router.get("/editarcli/:id", controller.edit);
router.post("/editarcli", controller.editcliente);
router.get("/addcli", controller.addcliente);

module.exports = router;