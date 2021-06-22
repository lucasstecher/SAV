const express = require('express');
const router = express.Router();

const controller = require('../models/Usuario');

router.post('/autenticar', controller.login);
router.post('/authfunc', controller.loginfunc);

module.exports = router;