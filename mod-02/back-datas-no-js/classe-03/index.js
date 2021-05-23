function taAberto(data) {
    const horaChegadaEmMins = (data.getHours() * 60) + (data.getMinutes()) + (data.getSeconds() / 60) + (data.getMilliseconds() / 1000);

    const horaAberturaEmMins = new Date(2020,1,1,8).getHours() * 60;

    const horaFechamentoEmMins = (new Date(2020,1,1,18).getHours() * 60) + (new Date(2020,1,1,18).getMinutes()) + (new Date(2020,1,1,18).getSeconds() / 60) + (new Date(2020,1,1,18).getMilliseconds() / 1000);

    if (horaChegadaEmMins >= horaAberturaEmMins && horaChegadaEmMins <= horaFechamentoEmMins) {
        console.log(true);
    } else{
        console.log(false);
    }
}

// taAberto(new Date(2015,1,1,12));

taAberto(new Date(2015,1,1,2)); 

