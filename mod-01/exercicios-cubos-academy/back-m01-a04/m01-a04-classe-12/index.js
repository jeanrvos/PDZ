const nomes = ["Arlindo", "João", "Eduardo", "amanda", "Ana"];

const nomesComA = [];

for (i = 0; i < nomes.length; i++) {
    const nome = nomes[i]
    const primeiraLetra = nome[0];

    if (primeiraLetra === "a" || primeiraLetra === "A") {
        nomesComA.push(nome);
    }
}

console.log(nomesComA);