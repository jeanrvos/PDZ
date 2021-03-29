const c = 1000, i = 0.125, t = 5;

const m = c * Math.pow((1 + i), t);

console.log(`O montante é igual a R$ ${m.toFixed(2)}`);