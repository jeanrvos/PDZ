//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos >= 200000) {
    if (mesesDecorridos < 60) {
        if (totalJaPagoPeloAluno < 1800000){
            let valorDaParcela = rendaMensalEmCentavos * 0.18;

            if ((totalJaPagoPeloAluno + valorDaParcela) > 1800000) {
                valorDaParcela = valorDaParcela - ((totalJaPagoPeloAluno + valorDaParcela) - 1800000);
            }

            console.log(`O valor da parcela a ser paga esse mês, referente ao melhor investimento que já fez, é de R$ ${valorDaParcela / 100}.`);

        } else {
            console.log("Parabéns! O valor da parcela desse mês é de R$ 0 e o seu contrato foi quitado.");
        }
    } else {
        console.log("Parabéns! O tempo de contrato foi encerrado e não há mais parcelas a serem pagas.");
    }
} else {
    console.log("O valor da parcela desse mês é de R$ 0, pois sua renda é inferior a R$ 2000.");
}