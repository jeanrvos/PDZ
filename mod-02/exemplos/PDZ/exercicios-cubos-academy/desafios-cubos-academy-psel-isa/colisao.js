// Desafio 04 - Colisao

function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui
    let distanciaDerrapagem = ((velocidade * velocidade) * -1) / (2 * aceleracao)
      
    if (distanciaObjeto < distanciaDerrapagem) {
        console.log("COLISAO A FRENTE") 
    } else if (distanciaObjeto === distanciaDerrapagem) {
        console.log("NAO ACELERE")
    } else {
        console.log("CAMINHO SEGURO")
    }
}