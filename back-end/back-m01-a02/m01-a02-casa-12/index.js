/* function possiveisInfectadas (pessoasInfectadas, tempo) {
    const x = 4;

    possiveisAfetados = pessoasInfectadas * Math.pow(x, (tempo / 7));

    console.log(`Considerando um número inicial de ${pessoasInfectadas} pessoas infectadas, após ${tempo} dias é possível que ${possiveisAfetados.toFixed(0)} pessoas estejam infectadas.`);
}

possiveisInfectadas (1000, 100); */


const pZero = 1000, x = 4, t = 100;

const possiveisInfectadas = pZero * Math.pow(x, (t / 7));

console.log(`Considerando um número inicial de ${pZero} pessoas infectadas, após ${t} dias é possível que ${possiveisInfectadas.toFixed(0)} pessoas estejam infectadas.`);