  
const express = require('express');
const router = express.Router();
const controller = require('../controllers/vendaController');

router.get("/venda", controller.index);
router.get("/vendafun", controller.vendafun);

module.exports = router;