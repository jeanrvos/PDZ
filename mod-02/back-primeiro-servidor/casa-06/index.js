const express = require('express');
const app = express();

let contadorMinutos = 0;
let contadorSegundos = 0;

let intervalId;

function contarTempo() {
    if(contadorSegundos < 59) {
        contadorSegundos++;
    } else {
        contadorSegundos = 0;
        contadorMinutos++;
    }
}

function pararTempo() {
    clearInterval(intervalId);
}

// letra a
app.get("/", (req, res) => {
    res.send(`Tempo atual do cronômetro: ${String(contadorMinutos).padStart(2, "0")} minuto${contadorMinutos === 1 ? "" : "s"} e ${String(contadorSegundos === 60 ? 0 : contadorSegundos).padStart(2, "0")} segundo${contadorSegundos === 1 ? "" : "s"}`);
});

app.get("/:funcao",(req, res) => {   
    // letra b 
    if(req.params.funcao === "iniciar") {
        if (contadorMinutos === 0 && contadorSegundos === 0) {
            intervalId = setInterval(contarTempo, 1000);
            res.send("Cronômetro iniciado!");
        }        
    } 
    // letra c
    else if (req.params.funcao === "pausar") {
        pararTempo();
        res.send("Cronômetro pausado!");
    } 
    // letra d
    else if (req.params.funcao === "continuar") {
        intervalId = setInterval(contarTempo, 1000);
        res.send("Cronômetro continuando!");
    } 
    // letra e
    else if (req.params.funcao === "zerar") {
        contadorMinutos = 0;
        contadorSegundos = 0;
        res.send("Cronômetro zerado!");
    }    

});

app.listen(8000);