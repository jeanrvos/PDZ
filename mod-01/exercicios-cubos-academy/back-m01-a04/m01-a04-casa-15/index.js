const numeros = [8, 11, 4, 1];

const diferencas = [];

for (i = 0; i < numeros.length; i++) {
    for (j = 0; j < numeros.length; j++) {
        const diferenca = numeros[i] - numeros[j];

        diferencas.push(diferenca);    
    }    
}

const max = Math.max(...diferencas);

/* const max = diferencas.reduce(function(a, b) {
    return Math.max(a,b);
}); */

console.log(`A maior diferença entre dois números do array indicado é ${max}.`);