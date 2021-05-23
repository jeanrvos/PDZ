const { isEmpty } = require('lodash');
const { addBusinessDays } = require('date-fns');
const { validarAdicao, validarAlteracao, validarRemocaoProduto, validarCompra } = require('../validacaoCarrinho/validacoes');
const { buscarEstoque, atualizarEstoque, buscarCarrinho, atualizarCarrinho } = require('../operacoes/operacoes');

const listarCarrinho = async (req, res) => {
    const carrinhoAtual = await buscarCarrinho(); 
    res.status(200);
    res.json(carrinhoAtual);
    return;
}

const adicionarProdutoNoCarrinho = async (req, res) => {
    const erro = await validarAdicao(req);
    const id = req.body.id;
    const quantidade = req.body.quantidade;

    if (erro) {
        res.status(400);
        res.json({erro});
        return;
    }    

    const estoque = await buscarEstoque();  

    const produto = estoque.produtos.find(produto => produto.id === id);

    produto.estoque = produto.estoque - quantidade;

    await atualizarEstoque (estoque);
    
    const conteudoCarrinho = await buscarCarrinho();

    const presenteNoCarrinho = conteudoCarrinho.produtos.find(produto => produto.id === id);

    if (presenteNoCarrinho) {
        presenteNoCarrinho.quantidade += quantidade;
    } else {
        const novoItemCarrinho = {
            "id": id,
            "quantidade": quantidade,
            "nome": produto.nome,
            "preco": produto.preco,
            "categoria": produto.categoria
        }
        conteudoCarrinho.produtos.push(novoItemCarrinho);
    }      

    const dataAtual = new Date();

    conteudoCarrinho.subTotal += (quantidade * produto.preco);
    // data de entrega considera dias úteis padrão do date-fns
    conteudoCarrinho.dataDeEntrega = addBusinessDays(dataAtual, 15);
    conteudoCarrinho.valorDoFrete = conteudoCarrinho.subTotal <= 20000 ? 5000 : 0;
    conteudoCarrinho.totalAPagar = conteudoCarrinho.subTotal + conteudoCarrinho.valorDoFrete;

    await atualizarCarrinho(conteudoCarrinho);

    const carrinhoAtualizado = await buscarCarrinho();

    res.status(200);
    res.json(carrinhoAtualizado);
    return;
}

const alterarCarrinho = async (req, res) => {
    const erro = await validarAlteracao(req);

    if (erro) {
        res.status(400);
        res.json({erro});
        return;
    } 

    const id = req.params.idProduto;
    const quantidade = req.body.quantidade;
    const conteudoCarrinho = await buscarCarrinho(); 

    const estoque = await buscarEstoque();  

    const produtoNoEstoque = estoque.produtos.find(produto => produto.id === Number(id));
    
    const produtoNoCarrinho = conteudoCarrinho.produtos.find(produto => produto.id === Number(id));

    produtoNoCarrinho.quantidade += quantidade;

    produtoNoEstoque.estoque = produtoNoEstoque.estoque + (quantidade * -1);

    await atualizarEstoque (estoque);

    conteudoCarrinho.subTotal -= ((quantidade * -1) * produtoNoCarrinho.preco);
    conteudoCarrinho.valorDoFrete = conteudoCarrinho.subTotal <= 20000 ? 5000 : 0;
    conteudoCarrinho.totalAPagar = conteudoCarrinho.subTotal + conteudoCarrinho.valorDoFrete;   
    
    if (produtoNoCarrinho.quantidade === 0) {
        const index = conteudoCarrinho.produtos.indexOf(produtoNoCarrinho);

        conteudoCarrinho.produtos.splice(index, 1);
    }

    await atualizarCarrinho(conteudoCarrinho);

    if(isEmpty(conteudoCarrinho.produtos)) {
        const carrinhoVazio = {
            subTotal: 0,
            dataDeEntrega: null,
            valorDoFrete: 0,
            totalAPagar: 0,
            produtos: []
        };   
        await atualizarCarrinho(carrinhoVazio); 
    }  
    
    const carrinhoAtualizado = await buscarCarrinho();

    res.status(200);
    res.json(carrinhoAtualizado);
    return;
}

const deletarProduto = async (req, res) => {
    const erro = await validarRemocaoProduto(req);

    if (erro) {
        res.status(400);
        res.json({erro});
        return;
    } 

    const id = req.params.idProduto;

    const conteudoCarrinho = await buscarCarrinho(); 
    const estoque = await buscarEstoque();  

    const produtoNoEstoque = estoque.produtos.find(produto => produto.id === Number(id));
    
    const produtoNoCarrinho = conteudoCarrinho.produtos.find(produto => produto.id === Number(id));

    const quantidade = produtoNoCarrinho.quantidade;

    produtoNoEstoque.estoque += quantidade;

    await atualizarEstoque (estoque);

    conteudoCarrinho.subTotal -= (quantidade * produtoNoCarrinho.preco);
    conteudoCarrinho.valorDoFrete = conteudoCarrinho.subTotal <= 20000 ? 5000 : 0;
    conteudoCarrinho.totalAPagar = conteudoCarrinho.subTotal + conteudoCarrinho.valorDoFrete;   
    
    const index = conteudoCarrinho.produtos.indexOf(produtoNoCarrinho);

    conteudoCarrinho.produtos.splice(index, 1);

    await atualizarCarrinho(conteudoCarrinho);

    if(isEmpty(conteudoCarrinho.produtos)) {
        const carrinhoVazio = {
            subTotal: 0,
            dataDeEntrega: null,
            valorDoFrete: 0,
            totalAPagar: 0,
            produtos: []
        }; 
        await atualizarCarrinho(carrinhoVazio);        
    }
    
    const carrinhoAtualizado = await buscarCarrinho();

    res.status(200);
    res.json(carrinhoAtualizado);
    return;
}

const deletarCarrinho = async (req, res) => {
    const conteudoCarrinho = await buscarCarrinho(); 
    const estoque = await buscarEstoque();

    await conteudoCarrinho.produtos.map (produto => {
        const produtoNoEstoque = estoque.produtos.find(produtoEstoque => produtoEstoque.id === produto.id);
        produtoNoEstoque.estoque += produto.quantidade;
    })

    await atualizarEstoque (estoque);

    const carrinhoVazio = {
        subTotal: 0,
        dataDeEntrega: null,
        valorDoFrete: 0,
        totalAPagar: 0,
        produtos: []
    } 

    await atualizarCarrinho(carrinhoVazio);
    
    res.status(200);
    res.json({ mensagem: "O carrinho foi limpo com sucesso!" });
    return;
}

// Coloquei as baixas de estoque nas funções anteriores, pois se não houver baixa ao adicionar produtos no carrinho, a validação do estoque disponível pode falhar.

const finalizarCompra = async (req, res) => {
    const conteudoCarrinho = await buscarCarrinho(); 

    if(isEmpty(conteudoCarrinho.produtos)) {
        res.status(400);
        res.json({ mensagem: "O carrinho está vazio! Impossível finalizar compra." })
        return;
    }

    const erro = await validarCompra (req.body);

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    } 

    const carrinhoFinalizado = conteudoCarrinho;

    const carrinhoVazio = {
        subTotal: 0,
        dataDeEntrega: null,
        valorDoFrete: 0,
        totalAPagar: 0,
        produtos: []
    } 

    await atualizarCarrinho(carrinhoVazio);
    
    res.status(200);
    res.json({ mensagem: "Compra efetuada com sucesso.", carrinho: carrinhoFinalizado });
    return;
}

module.exports = {
    listarCarrinho,
    adicionarProdutoNoCarrinho,
    alterarCarrinho,
    deletarProduto,
    deletarCarrinho,
    finalizarCompra
}