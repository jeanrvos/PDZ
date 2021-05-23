const numeros = [3, 4, 1, 8, 11, 7, 5];

const maiorNumero = Math.max(...numeros);

console.log(maiorNumero);


/* Lendo no MDN, encontrei também uma solução possível com Array.reduce 

const max = numeros.reduce(function(a, b) {
    return Math.max(a,b);
});

console.log(max);
 */


