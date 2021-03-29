const precoSemDesconto = 129.99, orcamento = 80;

const resultado = orcamento * 100 / precoSemDesconto;

const desconto = 100 - resultado;

console.log(`É necessário um desconto de ${desconto.toFixed(2)} %`);