const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// for de C

/* for (i = 0; i < original.length; i++) {
    const numero = original[i];
    const resto = numero % 2;

    if (resto === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
} */

// for

/* for (numero of original) {
    const resto = numero % 2;

    if (resto === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
} */

// while

let i = 0;



while (i <= original.length -1) {
    const numero = original[i];
    const resto = numero % 2;

    if (resto === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
    i++;
}

console.log(pares);

console.log(impares);