const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionariosController');


router.get("/funcionarios", controller.index);
router.post("/salvarfuncionario", controller.store);
router.get("/deletarfunc/:id", controller.delete);
router.get("/editarfunc/:id", controller.edit);
router.post("/editarfunc", controller.editfunc);
router.get("/addfunc", controller.addfunc);


module.exports = router;