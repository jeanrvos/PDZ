const email = "aluno@cubos.academy";

function validarEmail (email) {
    if (email.includes("@") && email.includes(".", email.indexOf("@")) && email.indexOf(".") > 0 && email.lastIndexOf(".") < email.length - 1) {   
        console.log("Email válido");
    } else {
        console.log("Email inválido");
    }        
}

validarEmail (email);