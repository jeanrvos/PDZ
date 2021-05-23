const { buscarEstoque } = require('../operacoes/operacoes');

const listaFiltrada = async (categoria, precoInicial, precoFinal) => {
    const arrayProdutos = await buscarEstoque();

    let produtosEmEstoque = arrayProdutos.produtos.filter(produto => produto.estoque > 0);

    if (categoria) {
        produtosEmEstoque = produtosEmEstoque.filter(produto => produto.categoria.toLowerCase() === categoria.toLowerCase());
    }

    if (precoInicial) {
        produtosEmEstoque = produtosEmEstoque.filter(produto => produto.preco >= precoInicial);
    }

    if (precoFinal) {
        produtosEmEstoque = produtosEmEstoque.filter(produto => produto.preco <= precoFinal);
    }

    return produtosEmEstoque;
}    


module.exports = {
    listaFiltrada
}