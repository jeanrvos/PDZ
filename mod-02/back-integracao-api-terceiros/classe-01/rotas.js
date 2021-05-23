const express = require('express');
const { buscarEmpresa } = require('./controladores/empresas');

const rotas = express();

rotas.get('/empresa/', buscarEmpresa);
rotas.get('/empresa/:dominioEmpresa', buscarEmpresa);

module.exports = rotas;