const express = require('express');
const { postVoto, buscarVotos } = require('./controladores/votacao');

const rotas = express();

rotas.post('/votacao/:pais/:ip', postVoto);
rotas.get('/votos', buscarVotos);

module.exports = rotas;