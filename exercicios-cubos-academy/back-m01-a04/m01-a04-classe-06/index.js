// const numeros = [2, 3, 4, 6];

const numeros = [];

for (i = 1; i <= 10; i += 2) {
    numeros.push(i);
}

let resultado = 0;

for (j = 0; j < numeros.length; j++) {
    const numero = numeros[j]; 
    
    resultado += numero;
}

console.log(`A soma de todos os números do array "[${numeros}]" é ${resultado}.`);