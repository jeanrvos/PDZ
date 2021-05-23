const cpf = "011.022.033-44";
// const cnpj = "12.345.678/0009-00";

function removerPontuacao (cpf) {

    const arrayCpf = ((cpf.replace("-", "")).replace("/", "")).split(".");

    const cpfSemPontuacao = arrayCpf.join("");

    console.log(cpfSemPontuacao);
}

removerPontuacao (cpf);
// removerPontuacao (cnpj);