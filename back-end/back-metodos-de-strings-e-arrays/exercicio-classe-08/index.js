let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];


function sistemaDeFormatacao (identificador, nome, email, tags) {

    identificador = identificador.padStart(6, "0");

    let arrayNomes = nome.split(" ");

    let arrayNomesCorrigidos = [];

    for (let i = 0; i < arrayNomes.length; i++) {
        let arrayNomeAntigo = arrayNomes[i].split("");
        arrayNomeAntigo[0] = arrayNomeAntigo[0].toUpperCase();
        const nomeCorrigido = arrayNomeAntigo.join("");
        arrayNomesCorrigidos.push(nomeCorrigido);
    };
  
    
    nome = arrayNomesCorrigidos.join(" ");
    
    email = email.trim();

    tags = tags.join(", ").trim();


    console.log(identificador);
    console.log(nome);
    console.log(email);
    console.log(tags);

}

sistemaDeFormatacao (identificador, nome, email, tags);