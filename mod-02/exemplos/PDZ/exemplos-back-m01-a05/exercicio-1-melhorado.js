const pessoa = {
    nome: "Jean",
    idade: 32,
    altura: 1.77,
    temCNH: true,
    apelidos: ["jota", "willow", "orelha"]
};

const possuiCNH = pessoa.temCNH === true ? "possui" : "não possui";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${possuiCNH} CNH e os seguintes apelidos:`);


for(let i = 0; i < pessoa.apelidos.length; i++) {
    console.log(`- ${pessoa.apelidos[i]}`);   
};


/* 

// Solução do juninho

let textoCNH = "";
if(pessoa.temCNH) {
    textoCNH = "possui";
} else {
    textoCNH = "não possui";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os seguintes apelidos:`);

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}

*/