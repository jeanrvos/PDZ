// Desafio 12 - Perda minima

function solucao(precos) {
    // seu código aqui
    let listaPrejuizos = [];
      
    for (i = 0; i < precos.length; i++) {
        for (j = i+1; j < precos.length; j++) {
            let prejuizo = precos[i] - precos[j];
              
            if (precos[i] <= precos[j]) {
                continue;
            }

            // Entendi posteriormente pelo professor que esse if de cima não é necessário, pois se "prejuizo > 0", logo não é <=.
              
            if (prejuizo > 0) {
                listaPrejuizos.push(prejuizo);
            }
        }
          
    }
      
    const menorPrejuizo = Math.min(...listaPrejuizos);
      
    console.log(menorPrejuizo);
}