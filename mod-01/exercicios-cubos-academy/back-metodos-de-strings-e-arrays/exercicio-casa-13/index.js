const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

let grupo1 = [];
let grupo2 = [];

function separarGrupos (nomes, tamanhoDoGrupo) {
    grupo1 = nomes.slice(0, tamanhoDoGrupo);
    grupo2 = nomes.slice(tamanhoDoGrupo, tamanhoDoGrupo.length);

    console.log(`Grupo 1: ${grupo1.join(", ")}`);
    console.log(`Grupo 2: ${grupo2.join(", ")}`);
}

separarGrupos (nomes, tamanhoDoGrupo);