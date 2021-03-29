//valor do produto comprado (centavos)
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago (reais)
const valorPago = 300;

const valorParcela = valorDoProduto / 100 / quantidadeDoParcelamento;

const parcelasPagas = valorPago / valorParcela;

const parcelasFaltantes = quantidadeDoParcelamento - parcelasPagas;

console.log(`Restam ${parcelasFaltantes} parcelas de R$ ${valorParcela}`);