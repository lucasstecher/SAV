const express = require('express');
const router = express.Router();
const controller = require('../controllers/gerenteController');


router.get("/gerente", controller.index);
router.post("/salvargerente", controller.store);

module.exports = router;