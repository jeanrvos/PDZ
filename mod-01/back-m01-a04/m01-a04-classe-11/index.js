const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

for (i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    const resto = numero % 2;

    if (resto === 0) {
        soma += numero;
    }
}

console.log(`A soma dos números pares presentes no array é ${soma}.`);