//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;


// desconto de 3%
const descontoCheque = 0.03

// desconto de 5%
const descontoCredito = 0.05

// desconto de 10%
const descontoDebitoDinheiro = 0.1


let desconto = 0;

let valorFinalDoProduto = 0;

if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    desconto = descontoDebitoDinheiro;
    valorFinalDoProduto = ((valorDoProduto - valorDoProduto * desconto) / 100)
    console.log(`Como o pagamento foi feito em ${tipoDePagamento}, foi aplicado um desconto de ${desconto*100}% e o valor final a ser pago é: R$ ${valorFinalDoProduto}.`);
} else if (tipoDePagamento === "credito") {
    desconto = descontoCredito;
    valorFinalDoProduto = ((valorDoProduto - valorDoProduto * desconto) / 100).toFixed(2);
    console.log(`Como o pagamento foi feito em ${tipoDePagamento}, foi aplicado um desconto de ${desconto*100}% e o valor final a ser pago é: R$ ${valorFinalDoProduto}.`);
} else {
    desconto = descontoCheque;
    valorFinalDoProduto = ((valorDoProduto - valorDoProduto * desconto) / 100).toFixed(2);
    console.log(`Como o pagamento foi feito em ${tipoDePagamento}, foi aplicado um desconto de ${desconto*100}% e o valor final a ser pago é: R$ ${valorFinalDoProduto}.`);
}