const { buscarEstoque, buscarCarrinho } = require('../operacoes/operacoes');

const validarEstoque = async (req) => {
    const estoque = await buscarEstoque();

    const carrinhoAtual = await buscarCarrinho();

    if(req.method === "PATCH") {
        const produtoEmEstoque = estoque.produtos.find(produto => produto.id === Number(req.params.idProduto));
        const produtoNoCarrinho = carrinhoAtual.produtos.find(produto => produto.id === Number(req.params.idProduto));

        if (produtoNoCarrinho) {
            if (req.body.quantidade < 0 && (req.body.quantidade + produtoNoCarrinho.quantidade) < 0) {
                return "Não é possível remover mais itens do que há no carrinho."
            } else if (req.body.quantidade > 0 && (req.body.quantidade + produtoNoCarrinho.quantidade) > (produtoEmEstoque.estoque + produtoNoCarrinho.quantidade)) {
                return "Não é possível comprar mais itens do que há no estoque."
            }
        } else {
            return "Produto não está no carrinho, portanto não pode ser alterado."
        }
    }

    if(req.method === "DELETE") {
        const produtoNoCarrinho = carrinhoAtual.produtos.find(produto => produto.id === Number(req.params.idProduto));

        if (!produtoNoCarrinho) {
            return "Produto não está no carrinho, portanto não pode ser removido."
        }
    }

    if(req.method === "POST") {
        const produtoEmEstoque = estoque.produtos.find(produto => produto.id === req.body.id);
        const produtoNoCarrinho = carrinhoAtual.produtos.find(produto => produto.id === req.body.id);

        if (!produtoEmEstoque) {
        return "Produto não cadastrado.";
        }
    
        if (produtoNoCarrinho) {
            if (produtoEmEstoque.estoque + produtoNoCarrinho.quantidade < req.body.quantidade + produtoNoCarrinho.quantidade) {
            return `Produto já consta no carrinho. ${produtoEmEstoque.estoque} em estoque atualmente.`;
            }
        } else {
            if (produtoEmEstoque.estoque < req.body.quantidade) {
                const texto = produtoEmEstoque.estoque > 0 ? `${produtoEmEstoque.estoque} em estoque atualmente.` : "Produto indisponível";
                return `${texto}`;
            }        
        } 
    }    
}

const validarAdicao = async (pedido) => {
    if (!pedido.body.id) {
        return "O campo 'id' é obrigatório.";
    }

    if (!pedido.body.quantidade) {
        return "O campo 'quantidade' é obrigatório.";
    }

    if (pedido.body.quantidade <= 0) {
        return "Quantidade mínima de 1 produto.";
    }

    if (typeof pedido.body.id !== "number") {
        return "O campo 'id' deve ser um número.";
    }

    if (typeof pedido.body.quantidade !== "number") {
        return "O campo 'quantidade' deve ser um número.";
    }

    const inclusaoInviavel = await validarEstoque (pedido);

    if (inclusaoInviavel) {
        return inclusaoInviavel;
    }
}

const validarAlteracao = async (pedido) => {
    if (!pedido.params.idProduto) {
        return "Obrigatório informar o 'id'.";
    }

    if (!pedido.body.quantidade) {
        return "O campo 'quantidade' é obrigatório.";
    }

    if (pedido.body.quantidade === 0) {
        return "Obrigatório informar quantidade para adicionar ou remover do carrinho.";
    }

    if (!Number(pedido.params.idProduto)) {
        return "O 'id' deve ser um número.";
    }

    if (typeof pedido.body.quantidade !== "number") {
        return "O campo 'quantidade' deve ser um número.";
    }

    const alteracaoInviavel = await validarEstoque (pedido);

    if (alteracaoInviavel) {
        return alteracaoInviavel;
    }
}

const validarRemocaoProduto = async (pedido) => {
    if (!pedido.params.idProduto) {
        return "Obrigatório informar o 'id'.";
    }

    if (!Number(pedido.params.idProduto)) {
        return "O 'id' deve ser um número.";
    }

    const delecaoInviavel = await validarEstoque (pedido);

    if (delecaoInviavel) {
        return delecaoInviavel;
    }
}

const validarCompra = async (pedido) => {
    if (!pedido.customer.type) {
        return "O campo 'type' é obrigatório.";
    }

    if (!pedido.customer.country) {
        return "O campo 'country' é obrigatório.";
    }

    if (!pedido.customer.name) {
        return "O campo 'name' é obrigatório.";
    }

    if (!pedido.customer.documents) {
        return "O campo 'documents' é obrigatório.";
    }

    if (typeof pedido.customer.type !== "string") {
        return "O campo 'type' deve ser um texto.";
    }

    if (typeof pedido.customer.country !== "string") {
        return "O campo 'country' deve ser um texto.";
    }

    if (typeof pedido.customer.name !== "string") {
        return "O campo 'name' deve ser um texto.";
    }

    if (typeof pedido.customer.documents !== "object") {
        return "O campo 'documents' deve ser uma lista, contendo um objeto com tipo e número do documento.";
    }

    if (pedido.customer.country.length !== 2) {
        return "O campo 'country' deve conter apenas dois dígitos."
    }

    if (pedido.customer.type !== "individual") {
        return "Este e-commerce atende apenas pessoas físicas.";
    }
    
    const name = (pedido.customer.name.trim()).split(" ");
    
    if (name.length < 2) {
        return "O campo 'name' deve conter ao menos um nome e um sobrenome."
    }

    const cpf = pedido.customer.documents[0].number;

    if(cpf.length !== 11) {
        return "O cpf deve conter um total de 11 caracteres, sendo apenas números.";
    } 

    if(!Number(cpf)) {
        return "O cpf deve conter apenas números."
    }

    if(cpf.length !== 11) {
        return "O cpf deve conter um total de 11 caracteres, sendo apenas números.";
    }    
}

module.exports = {
    validarEstoque,
    validarAdicao,
    validarAlteracao,
    validarRemocaoProduto,
    validarCompra
}