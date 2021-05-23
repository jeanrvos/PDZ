const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let contador = 0;

app.get("/", (req, res) => {
    const jogador = jogadores[contador];
    res.send(`É a vez de ${jogador} jogar!`);

    if (contador < jogadores.length - 1) {
        contador++;
    } else {
        contador = 0;
    }    
});

app.get("/remover", (req, res) => {
    const index = Number(req.query.indice);

    if (jogadores[index] !== undefined) {
        jogadores.splice(index,1);
        res.send(jogadores);

    } else {
        res.send(`Não existe jogador no índice informado (${index}) para ser removido.`);
    }
});

app.get("/adicionar", (req, res) => {
    const index = req.query.indice;
    const nome = req.query.nome;
    const nomeFormatado = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

    if (index === undefined) {
        jogadores.push(nomeFormatado);
        res.send(jogadores);
    } else {
        if (jogadores[Number(index)] === undefined) {
            res.send(`O índice informado (${Number(index)}) não existe no array. Novo jogador não adicionado.`); 
        } else {
            jogadores.splice(Number(index), 0, nomeFormatado);
            res.send(jogadores);
        }
    }
});

app.listen(8000);