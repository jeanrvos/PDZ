function solucao(texto) {
    // Seu código aqui

    const arrayPalavras = texto.trim().split(/\s+/g);

    console.log(arrayPalavras.length);    
}

/* function solucao(texto) {
    // Seu código aqui

    let textoCorrigido = texto.trim();

    let textoAnterior = "";

    while (textoCorrigido !== textoAnterior) {
        textoAnterior = textoCorrigido;
        textoCorrigido = textoCorrigido.replace("\n", " ").replace("  ", " ").replace(".", "").replace(",", "").replace("/", "").replace(";", "");
    }
    
    const arrayPalavras = textoCorrigido.split(" ");

    console.log(arrayPalavras.length);    
} */

/* function solucao(texto) {
    // Seu código aqui

    const textoCorrigido = texto.replace(/(\s|\;|\,)/g," ").trim();

    console.log(textoCorrigido);
            
    const totalPalavras = textoCorrigido.split(/\s+/g);

    console.log(totalPalavras);

    console.log(totalPalavras.length);            
    
} */


/* function solucao(texto) {
    // Seu código aqui

    const arrayPalavras = texto.trim().split(" ");
    
    const contadorDePalavras = (arrayPalavras) {

    }
    
    const arrayPalavras = texto.trim().replace("-", " ").replace(",", "").replace().split(" ");

    console.log(arrayPalavras);
    
    console.log(arrayPalavras.length);
    
} */

solucao("Cuidado , pois usuarios as\nvezes  deixam espacos vazios no\nfim do ; texto\nsem querer.");