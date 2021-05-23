const express = require('express');
const { listarProdutos } = require('./controladores/estoque');
const { listarCarrinho, adicionarProdutoNoCarrinho, alterarCarrinho, deletarProduto, deletarCarrinho, finalizarCompra } = require('./controladores/carrinho');

const rotas = express();

rotas.get('/produtos', listarProdutos);
rotas.get('/carrinho', listarCarrinho);

rotas.post('/carrinho/produtos', adicionarProdutoNoCarrinho);
rotas.post('/carrinho/finalizar-compra', finalizarCompra);

rotas.patch('/carrinho/produtos/:idProduto', alterarCarrinho);

rotas.delete('/carrinho/produtos/:idProduto', deletarProduto);
rotas.delete('/carrinho/', deletarCarrinho);

module.exports = rotas;