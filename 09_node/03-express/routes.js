const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const testeController = require('./src/controllers/testeController');

// Rotas da home
route.get('/', homeController.paginaInicial);

// Rotas do contato
route.get('/contato', contatoController.contato);
route.post('/contato', contatoController.contatoForm);

// Rotas do teste
route.get('/testes/:idUsuario?/:params?', testeController.teste)

module.exports = route;