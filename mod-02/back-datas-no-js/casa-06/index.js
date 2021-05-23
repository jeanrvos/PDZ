import { differenceInMilliseconds } from 'date-fns';

const tempoPromocaoEmMilliSec = 24 * 60 * 60 * 1000;

function promocaoValida (dataPromocao, dataPedido) {
    const horasDiferenca = differenceInMilliseconds(dataPedido, dataPromocao);

    if (horasDiferenca >= 0 && horasDiferenca <= tempoPromocaoEmMilliSec) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

promocaoValida(new Date(2021,3,27), new Date(2021,3,28));