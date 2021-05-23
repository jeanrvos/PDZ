const imoveis = require("../dados/imoveis");

function get(req, res) {
    res.json(imoveis);
}

function getPorId(req, res) {
    const imovel = imoveis.find(imovel => imovel.id === Number(req.params.id));

    res.json(imovel);
}

module.exports = {get, getPorId}