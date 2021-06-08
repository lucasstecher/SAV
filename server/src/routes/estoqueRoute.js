const express = require('express');
const router = express.Router();
const controller = require('../controllers/estoqueController');

router.get("/estoque", controller.index);
router.post("/salvarestoque", controller.store);
router.get("/deletarest/:id", controller.delete);

module.exports = router;