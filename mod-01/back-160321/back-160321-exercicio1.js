const valorDaCompra = 10000;
const numeroDeParcelas = 1;

// minha solução

/* if (numeroDeParcelas === 1) {
    console.log(`Você está pagando à vista e por isso recebe um desconto de 10% em cima do valor total da compra. 
    O valor de sua compra com desconto é de R$ ${(valorDaCompra * 0.9) / 100}`);
} else {
    console.log(`Você optou por pagar em ${numeroDeParcelas} vezes e portanto não tem direito a um desconto. 
    O valor de suas parcelas será de R$ ${(valorDaCompra / numeroDeParcelas).toFixed(2)}`);
} */

// resposta

if (numeroDeParcelas === 1) {
    let valorAPagarEmReais = (valorDaCompra * 0.9);
    console.log(`Como o pagamento é a vista, você tem um desconto de 10% e deve pagar apenas R$ ${valorAPagarEmReais/100}`);
} else {
    let valorDaParcelaEmReais = valorDaCompra / numeroDeParcelas / 100;
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de R$ ${valorDaParcelaEmReais.toFixed(2)}, totalizando R$ ${(valorDaCompra / 100).toFixed(2)} `);
}