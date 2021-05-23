const { listaFiltrada } = require('../filtros/filtros');

const listarProdutos = async (req, res) => {  

    const { categoria, precoInicial, precoFinal } = req.query;

    let response = await listaFiltrada(categoria, precoInicial, precoFinal);

    if (!response) {
        return res.status(200).json({ "mensagem": "Não há produtos disponíveis em estoque." });
    }

    res.status(200).json(response);
}

module.exports = {
    listarProdutos
}