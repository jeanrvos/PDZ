const texto = "Aprenda programar do zero na Cubos Academy";

/* const textoMinusculo = texto.toLowerCase();

let urlAmigavel = textoMinusculo;
let urlAnterior = "";

while (urlAmigavel !== urlAnterior) {
    urlAnterior = urlAmigavel;
    urlAmigavel = urlAmigavel.replace(" ", "-");
}

console.log(urlAmigavel); */


function transformarTextoEmUrl(texto) {
    const url = texto.toLowerCase().split(' ').join('-');
    console.log(url);
}

transformarTextoEmUrl(texto);