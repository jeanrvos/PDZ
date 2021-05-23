const fs = require('fs/promises');

const buscarEstoque = async () => {
    try {
        const conteudoArquivo = await fs.readFile('./data.json', (err, data) => {
            if (err) {
                return err;
            }
            return data;
        });

        if (conteudoArquivo.length > 0) {
            return JSON.parse(conteudoArquivo);
        }

    } catch (err) {
        return false;
    }   
};

const atualizarEstoque = async (estoque) => {
    try {
        return await fs.writeFile('./data.json', JSON.stringify(estoque, null, 2));
    } catch (err) {
        return false;
    }    
};

const buscarCarrinho = async () => {
    try {
        return JSON.parse(await fs.readFile('./carrinho.json'));
    } catch (err) {
        return false;
    }    
};

const atualizarCarrinho = async (carrinho) => {
    try {
        return await fs.writeFile('./carrinho.json', JSON.stringify(carrinho, null, 2));
    } catch (err) {
        return false;
    }    
};

module.exports = {
    buscarEstoque,
    atualizarEstoque,
    buscarCarrinho,
    atualizarCarrinho
}