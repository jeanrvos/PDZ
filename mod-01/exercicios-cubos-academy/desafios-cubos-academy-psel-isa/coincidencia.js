// Desafio 10 - Coincidencia

function solucao(jogadas) {
    //seu código aqui
    let escolheuUm = 0;
    let escolheuZero = 0; 
  
      
    for (i = 0; i < jogadas.length; i++) {
        const jogada = jogadas[i]
                
        if (jogada === 1) {
            escolheuUm++;
        } else {
            escolheuZero++;
        }
    }
      
    if (escolheuUm === escolheuZero) {
        console.log(true);
    } else {
        console.log(false);
    }
          
}