const cpf = "12345678900";
const cnpj = "12345678000199";

let cpfValidado = "";

function validarCpf (cpf){
    const arrayCpf = cpf.split("");
    
    if (arrayCpf.length === 11) {

        arrayCpf.splice(3, 0, ".");
        arrayCpf.splice(7, 0, ".");
        arrayCpf.splice(-2, 0, "-");

        cpfValidado = arrayCpf.join("");

        console.log(cpfValidado);

    } else{
        console.log("CPF inválido");
    }

}

validarCpf(cpf);


let cnpjValidado = "";

function validarCnpj (cnpj){
    const arrayCnpj = cnpj.split("");
    
    if (arrayCnpj.length === 14) {

        arrayCnpj.splice(2, 0, ".");
        arrayCnpj.splice(6, 0, ".");
        arrayCnpj.splice(10, 0, "/");
        arrayCnpj.splice(-2, 0, "-");

        cnpjValidado = arrayCnpj.join("");

        console.log(cnpjValidado);

    } else{
        console.log("CNPJ inválido");
    }

}

validarCnpj(cnpj);
