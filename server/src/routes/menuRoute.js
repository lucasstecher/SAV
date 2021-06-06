const express = require('express');
const router = express.Router();

const controller = require('../controllers/menuController');

// .get especifica o que o que acontece quando o navegador
// entra em contato com o server e faz um get request
// o parâmetro '/' é a raiz, e a função é o que o servidor retorna
router.get("/", controller.index);
router.get("/menu", controller.menu);

module.exports = router;