const numeros = [34, 26, 17, 10, 8];

let encontrado = false;

for (i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero === 10) {
        encontrado = true;
        console.log(`O número 10 está presente na lista e seu índice é ${i}.`);
        break;
    }
}

if(!encontrado) {
    console.log(-1);
}