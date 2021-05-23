const valorDaCompra = 10000;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    let valorAPagarEmReais = (valorDaCompra * 0.9);
    console.log(`Como o pagamento é a vista, você tem um desconto de 10% e deve pagar apenas R$ ${valorAPagarEmReais/100}`);
} else if (numeroDeParcelas <= 6) {
    let valorDaParcelaEmReais = valorDaCompra / numeroDeParcelas / 100;
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de R$ ${valorDaParcelaEmReais.toFixed(2)}, totalizando R$ ${(valorDaCompra / 100).toFixed(2)} `);
} else if (numeroDeParcelas > 6 && numeroDeParcelas <= 12) {
    const valorTotalComJuros = valorDaCompra * Math.pow((1 + 0.01), numeroDeParcelas);
    let valorDaParcelaComJuros = (valorTotalComJuros / numeroDeParcelas / 100).toFixed(2);
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de R$ ${valorDaParcelaComJuros} com juros, totalizando R$ ${(valorTotalComJuros / 100).toFixed(2)}`);
} else {
    console.log('Não é possível dividir nessa quantidade de parcelas');
}
    