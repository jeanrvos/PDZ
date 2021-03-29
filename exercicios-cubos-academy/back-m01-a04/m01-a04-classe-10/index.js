const original = [5, 6, 14, 32, 55, 84, 87, 90, 97, 110];

const pares = [];

for (i = 0; i < original.length; i++) {
    const numero = original[i];
    const resto = numero % 2;

    if (resto === 0) {
        pares.push(numero);
    }
}

console.log(pares);