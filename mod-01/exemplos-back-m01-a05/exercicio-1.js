const pessoa = {
    nome: "Jean",
    idade: 32,
    altura: 1.77,
    temCNH: true,
    apelidos: ["jota", "willow"]
};

const possuiCNH = pessoa.temCNH === true ? "possui" : "não possui";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${possuiCNH} CNH e os seguintes apelidos: 
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`);