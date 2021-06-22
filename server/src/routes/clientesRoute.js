const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientesController');

router.get("/clientes", controller.index);
router.post("/salvarcliente", controller.store);
router.get("/deletarcli/:id", controller.delete);
router.get("/editarcli/:id", controller.edit);
router.post("/editarcli", controller.editcliente);
router.get("/addcli", controller.addcliente);
router.get("/clientesfun", controller.clientefun);
router.get("/addclifun", controller.addclifun);
router.post("/editarclifun", controller.editfun);
router.get("/editarclifun/:id", controller.editclientefun);
router.post("/salvarclientefun", controller.storefun);

module.exports = router;