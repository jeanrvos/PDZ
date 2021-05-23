const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// Letra a)

numeros.sort((a, b) => a - b);

console.log(numeros);

// Letra b)

numeros.sort((a, b) => b - a);

console.log(numeros);

// Letra c)

numeros.sort();

console.log(numeros);

// Letra d)

frutas.sort((a, b) => a.localeCompare(b));

console.log(frutas);

// Letra e)

frutas.sort((a, b) => b.localeCompare(a));

console.log(frutas);

// Letra f)

frutas.sort((a, b) => a.length - b.length);

console.log(frutas);