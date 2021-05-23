const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const frutasInvertido = (frutas.reverse()).join(", ");

console.log(frutasInvertido);

(frutas.reverse()).splice(0, 1);

frutas.splice(frutas.length-1, 1, "Melão");

console.log(frutas);
