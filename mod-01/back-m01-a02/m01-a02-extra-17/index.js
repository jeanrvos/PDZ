function taxaDeJuros (montante, capitalInicial, tempoDecorrido) {
    const i = (Math.pow((montante / capitalInicial), (1 / tempoDecorrido)) - 1) * 100;

    console.log(`O seu financiamento de R$ ${capitalInicial} teve uma taxa de juros de ${i.toFixed(3)}%, pois após ${tempoDecorrido} meses você teve que pagar R$ ${montante}.`);
}

taxaDeJuros(90000, 60000, 24);