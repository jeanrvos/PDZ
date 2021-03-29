const nomeArquivo = 'Foto da Familia.pdf';

function validarFormatoDeArquivo (nomeArquivo) {
    if (nomeArquivo.includes("jpg", nomeArquivo.lastIndexOf(".")) || nomeArquivo.includes("jpeg", nomeArquivo.lastIndexOf(".")) || nomeArquivo.includes("gif", nomeArquivo.lastIndexOf(".")) || nomeArquivo.includes("png", nomeArquivo.lastIndexOf("."))) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

validarFormatoDeArquivo (nomeArquivo);