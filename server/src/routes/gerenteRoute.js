const express = require('express');
const router = express.Router();
const controller = require('../controllers/gerenteController');


router.get("/gerentes", controller.index);
router.post("/salvargerente", controller.store);
router.get("/deletarger/:id", controller.delete);
router.get("/editarger/:id", controller.edit);
router.post("/editarger", controller.editger);
router.get("/addger", controller.addger);

module.exports = router;