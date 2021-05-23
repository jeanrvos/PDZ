const fs = require('fs');

const data = "Estou aprendendo JavaScript no Cubos Academy";

fs.writeFile("./meuarquivo.txt", data, () => {
    console.log("Arquivo criado");
});