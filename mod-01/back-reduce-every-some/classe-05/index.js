const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const listaRevisada = palavras.some(x => x === "cerveja" || x === "vodka");

if (listaRevisada) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("tudo certo, vamos as compras!");
};

