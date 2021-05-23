const express = require("express");
const {listarAlunos} = require("./controladores/alunos");
const {buscarUmAluno} = require("./controladores/alunos");
const {inserirAluno} = require("./controladores/alunos");
const {substituirAluno} = require("./controladores/alunos");
const {editarAluno} = require("./controladores/alunos");
const {excluirAluno} = require("./controladores/alunos");


const roteador = express();

roteador.get("/alunos", listarAlunos);
roteador.get("/alunos/:id", buscarUmAluno);
roteador.post("/alunos", inserirAluno);
roteador.put("/alunos/:id", substituirAluno);
roteador.patch("/alunos/:id", editarAluno);
roteador.delete("/alunos/:id", excluirAluno);

module.exports = roteador;