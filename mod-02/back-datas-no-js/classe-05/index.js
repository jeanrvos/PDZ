function taAberto(data) {
    const horaChegadaEmMins = (data.getHours() * 60) + (data.getMinutes()) + (data.getSeconds() / 60) + (data.getMilliseconds() / 1000);

    const diaDaChegada = data.getDay();

    const horaAberturaEmMins = new Date(2020,1,1,8).getHours() * 60;

    const horaFechamentoEmMins = (new Date(2020,1,1,18).getHours() * 60) + (new Date(2020,1,1,18).getMinutes()) + (new Date(2020,1,1,18).getSeconds() / 60) + (new Date(2020,1,1,18).getMilliseconds() / 1000);

    const horaFechamentoSabado = 12 * 60;

    if (diaDaChegada !== 0 && horaChegadaEmMins >= horaAberturaEmMins && horaChegadaEmMins <= horaFechamentoEmMins || (diaDaChegada === 6 && horaChegadaEmMins >= horaAberturaEmMins && horaChegadaEmMins <= horaFechamentoSabado)) {
        console.log(true);
    } else{
        console.log(false);
    }
}

taAberto(new Date(2021,3,25,12)); // deve retornar false, pois é um domingo

// taAberto(new Date(2021,3,26,12)); // deve retornar true, pois é uma segunda

// taAberto(new Date(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)

// taAberto(new Date(2021,3,24,9,30)); // deve retornar true, pois é sábado de manhã (9h30)

