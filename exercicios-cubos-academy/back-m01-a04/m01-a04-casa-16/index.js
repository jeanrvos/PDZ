const original = [5, 7, 13, 17, 26, 34, 118, 245];

const novoArray = [];

for (i = 0; i < original.length; i++) {
    const numero = original[i];

    if (numero > 10 && numero < 20 || numero > 100) {
        novoArray.push(numero);
    }
}

console.log(novoArray);