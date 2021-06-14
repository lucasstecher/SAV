const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionariosController');


router.get("/funcionarios", controller.index);
router.post("/salvarfuncionario", controller.store);
//router.get("/deletarfun/:id", controller.delete);
//router.get("/editarfun/:id", controller.edit);
//router.post("/editarfun", controller.edite);


module.exports = router;