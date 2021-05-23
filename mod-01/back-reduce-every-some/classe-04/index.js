const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const lengthMaiorQue5 = palavras.some(x => x.length > 5);

if (lengthMaiorQue5) {
    console.log("Existe palavra inválida");
} else {
    console.log("Array validado");
};