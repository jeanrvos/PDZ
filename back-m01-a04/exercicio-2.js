const palavra = "Aranha";

const letra = "A";

let contador = 0;

for (i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
        contador++;
    }
}

const resposta = contador > 1 ? `A letra '${letra}' foi encontrada ${contador} vezes na palavra indicada.` : `A letra '${letra}' foi encontrada ${contador} vez na palavra indicada.`;

if (contador === 0) {
    console.log(`A letra ${letra} não foi encontrada na palavra.`)
} else {
    console.log(resposta);
}

