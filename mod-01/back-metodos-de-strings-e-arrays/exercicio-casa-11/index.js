const celular = 99918888;

const stringCelular = `${celular}`;

let arrayCelular = [];
let stringDDD = "";
let celularFormatado = "";

function conversorDeCelular (celular) {
    if (stringCelular.length === 10) {
        arrayCelular = stringCelular.split("");
        stringDDD = `(${(arrayCelular.slice(0,2)).join("")})`;
        stringCelularSemDDD = `${arrayCelular.slice(2, arrayCelular.length)}`;
        arrayCelular.splice(-4, 0, "-");
        arrayCelular.splice(0, 2, `${stringDDD} 9 `);
        celularFormatado = arrayCelular.join("");        
    } else if (stringCelular.length === 8) {
        arrayCelular = stringCelular.split("");
        arrayCelular.splice(0, 0, "9 ");
        celularFormatado = arrayCelular.join(""); 
    }

    console.log(celularFormatado);
}

conversorDeCelular (celular);

