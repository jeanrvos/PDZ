// Desafio 01 - Divisivel por x

function solucao(numero, x) {
    const resto = numero % x;
        
    if (resto === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
    