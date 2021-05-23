const express = require("express");
const {get} = require("./controladores/imoveis");
const {getPorId} = require("./controladores/imoveis");

const roteador = express();

roteador.get("/imoveis", get);
roteador.get("/imoveis/:id", getPorId);

module.exports = roteador;