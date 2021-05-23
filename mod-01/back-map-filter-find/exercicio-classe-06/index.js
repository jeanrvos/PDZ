const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

const duracaoRodada = 10;

let i = 0;

function imprimirJogador() {
    if (i === jogadores.length) {
        console.log("A rodada terminou!");
        clearInterval(intervalId);
    } else {
        console.log(`Está na vez de ${jogadores[i]}.`);
    i++; 
    }    
}

imprimirJogador();

const intervalId = setInterval(imprimirJogador, duracaoRodada / jogadores.length * 1000);

