// const letras = ["A", "a", "B", "C", "L", "z"];

const letras = ["E", "a", "C", "K", "e", "C", "d", "e", "A", "E"];

const letra1 = "E";
const letra2 = "e";

let contador = 0;

let encontrado = false;

for (i = 0; i < letras.length; i++) {
    const letra = letras[i];

    if (letra == letra1 || letra == letra2) {
        encontrado = true;
        contador++;
    }
}

const resposta = contador > 1 ? "letras" : "letra";

if (!encontrado) {
    console.log(`Não foram encontradas letras "${letra1}" ou "${letra2}" no array.`)
} else {
    console.log(`Sua busca retornou um total de ${contador} letras "${letra1}" ou "${letra2}".`);   
}