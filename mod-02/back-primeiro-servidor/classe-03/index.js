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

app.listen(8000);