import { differenceInCalendarDays } from 'date-fns';

function promocaoValida (dataPromocao, dataPedido) {
    const diasDiferenca = differenceInCalendarDays(dataPedido, dataPromocao);

    if (diasDiferenca >= 0 && diasDiferenca <= 30) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

promocaoValida(new Date(2021,4,27), new Date(2021,5,26));