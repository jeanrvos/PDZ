const numeros = [0, 122, 4, 6, 7, 8, 44];

const todosPares = numeros.every(x => x % 2 === 0);

if (todosPares) {
    console.log("array válido");
} else {
    console.log("array inválido");
};

