const comentario = "Esse COVID é muito perigoso!";


/* function validarComentario (comentario) {
    const termosProibidos = ["covid", "Covid", "COVID", "pandemia", "Pandemia", "PANDEMIA"];

    let termoEncontrado = false;

    for (let i = 0; i < comentario.length; i++) {
        if (comentario.includes(termosProibidos[i])) {
            termoEncontrado = true;
            console.log("Comentário bloqueado por conter palavras proibidas.");
            // break;
        }
    }
    
    if(!termoEncontrado) {
        console.log("Comentário autorizado.");            
    }

}

validarComentario(comentario); */


const achouCovid = comentario.toLowerCase().includes('covid');

const achouPandemia = comentario.toLowerCase().includes('pandemia');

if (achouCovid || achouPandemia) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}