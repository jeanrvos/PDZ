const nomeArquivo = 'Foto da Familia.pdf';

function validarFormatoDeArquivo (nomeArquivo) {
    if (nomeArquivo.includes("jpg", nomeArquivo.lastIndexOf(".")) || nomeArquivo.includes("jpeg", nomeArquivo.lastIndexOf(".")) || nomeArquivo.includes("gif", nomeArquivo.lastIndexOf(".")) || nomeArquivo.includes("png", nomeArquivo.lastIndexOf("."))) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

validarFormatoDeArquivo (nomeArquivo);


/* function validarArquivo(arquivo) {
    const arquivosValidos = ['jpg', 'jpeg', 'gif', 'png'];
    const extensao = arquivo.substr(arquivo.lastIndexOf('.') + 1);

    if (arquivosValidos.includes(extensao)) {
        console.log('Arquivo válido!');
    } else {
        console.log('Arquivo inválido!');
    }
}

validarArquivo(nomeArquivo); */