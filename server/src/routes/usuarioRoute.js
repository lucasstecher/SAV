const express = require('express');
const router = express.Router();

const controller = require('../models/Usuario')

router.post('/autenticar', controller.login);

module.exports = router;