// Desafio 07 - Purificacao

function solucao(stringCorrompida) {
	// seu código aqui
    const caracteresEspeciais = "";
       
    let letraNova = "";
    let resposta = "";
    
    for (i = 0; i < stringCorrompida.length; i++) {
        const letraOriginal = stringCorrompida[i];
     
        if (letraOriginal === "!" || letraOriginal === "@" || letraOriginal === "#" || letraOriginal === "$" || letraOriginal === "%" || letraOriginal === "&" || letraOriginal === "*" || letraOriginal === "(" || letraOriginal === ")") {
            letraNova = caracteresEspeciais;
        } else {
            letraNova = stringCorrompida[i];
        }
        resposta += letraNova
    }
    console.log(resposta);
    
}