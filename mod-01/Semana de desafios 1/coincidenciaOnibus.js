function solucao(a, b) {
    // Escreva seu código aqui

    let valor;
    let razao;
    let contador = 1;

    const pa = [];


    if (a < b) {
        valor = a;
        razao = b - a;

        for (contador; contador <= 100; contador++) {
            pa.push(valor);
            valor += razao; 
        }
    } else if (a > b) {
        valor = b;
        razao = a - b;

        for (contador; contador <= 100; contador++) {
            pa.push(valor);
            valor += razao; 
        } 
    }

    const tempoParaEncontro = pa.find(x => x % a === 0 && x % b ===0);

    console.log(tempoParaEncontro);

}

/* function solucao(a, b) {
    // Escreva seu código aqui

    const minutosParaEncontro = (a, b) => {
        let resto;
        let x = a;
        let y = b;

        while (resto !== 0) {
        resto = x % y;
        
        x = y;
        y = resto;
        }
   
        return (a * b) / x;
    }
    
    console.log(minutosParaEncontro(a, b));
} */



// solucao(3, 6);

solucao(12, 15);