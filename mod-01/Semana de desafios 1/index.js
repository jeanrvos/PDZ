function processData(input) {
    //Enter your code here

    const arrayInput = input.split("\n");

    const splitSenha = arrayInput[0].split("");

    const splitSenhaDigitada = arrayInput[1].split("");

    let validacaoLetra = splitSenhaDigitada.indexOf(splitSenha[0]) >= splitSenha.indexOf(splitSenha[0]);

    const arrayValidacaoLetras = [validacaoLetra];

    for (let i = 1; i < splitSenha.length; i++) {
        const letra = splitSenha[i];

        if (splitSenhaDigitada.indexOf(letra, splitSenhaDigitada.indexOf(splitSenha[i-1])) >= splitSenha.indexOf(letra)) {
            validacaoLetra = true;
            arrayValidacaoLetras.push(validacaoLetra);
        } else {
            validacaoLetra = false;
            arrayValidacaoLetras.push(validacaoLetra);
        }
    }

    const abreCofre = arrayValidacaoLetras.every (x => x === true);

    if(abreCofre) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }

} 

// processData("cubos\ncuggbyos");
processData("cubos\newvelrabsocaeln");