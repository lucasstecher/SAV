const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionariosController');


router.get("/funcionarios", controller.index);
router.post("/salvarfuncionario", controller.store);

module.exports = router;