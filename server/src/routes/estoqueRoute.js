const express = require('express');
const router = express.Router();
const controller = require('../controllers/estoqueController');

router.get("/estoque", controller.index);
router.post("/salvarestoque", controller.store);

module.exports = router;