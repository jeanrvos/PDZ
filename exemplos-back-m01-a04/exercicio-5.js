const nomes = ["Maria", "Jose", "Raimundo", "João", "Jane"];

let encontrado = false;

for (i = 0; i < nomes.length; i++) {
    const nome = nomes[i];

    if (nome === "João") {
        encontrado = true;
        console.log(`O índice de João na lista é ${i}.`);
        break;
    }
}

if (!encontrado) {
    console.log("não encontrado");
}