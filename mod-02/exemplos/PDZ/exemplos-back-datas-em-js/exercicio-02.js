const finalDaCopa = new Date(2002, 5, 30, 8, );

// timestamp
const primeiroGol = new Date(+finalDaCopa + 1000*60*82);

// timestamp
const segundoGol  = new Date(+primeiroGol + 1000*60*12);

console.log('Primeiro gol', primeiroGol);

console.log('Segundo gol', segundoGol);

// 22 e 34 com 15 de intervalo