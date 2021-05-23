// Desafio 11 - Entao e natal

function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    // seu código aqui
    let valorSalgado = 0;
    let valorDoce = 0;
    let valorBebida = 0;    
        
    let valorFinalCompras = 0;
      
    for (i = 0; i < produtos.length; i++) {
        const produtoComprado = produtos[i];
         
        if (produtoComprado.categoria === "SALGADO") {
            valorSalgado += ((produtoComprado.valor * produtoComprado.quantidade) * (90 / 100));
        } else if (produtoComprado.categoria === "DOCE") {
            valorDoce += ((produtoComprado.valor * produtoComprado.quantidade) * (85 / 100));
        } else {
            valorBebida += ((produtoComprado.valor * produtoComprado.quantidade) * (70 / 100));
        }
          
       const valorDasCompras = valorSalgado + valorDoce + valorBebida
          
       if (cupomDesconto === "NATAL10" && ehPrimeiraCompra && valorDasCompras > 3000) {
           valorFinalCompras = (valorDasCompras * (90 / 100)) + (distanciaRestaurante * 120);
       } else if (cupomDesconto === "NATAL20" && ehPrimeiraCompra && valorDasCompras > 4500) {
              valorFinalCompras = (valorDasCompras * (80 / 100)) + (distanciaRestaurante * 120);
       } else if (cupomDesconto === "NATAL30" && ehPrimeiraCompra && valorDasCompras > 6000) {
              valorFinalCompras = (valorDasCompras * (70 / 100)) + (distanciaRestaurante * 120);
       } else if (cupomDesconto === "NATALSUPREMO" && ehPrimeiraCompra && valorDasCompras > 8000) {
              valorFinalCompras = valorDasCompras * (70 / 100)
       } else {
              valorFinalCompras = valorDasCompras + (distanciaRestaurante * 120);
       }   
          
    }
      
    console.log(valorFinalCompras);
}