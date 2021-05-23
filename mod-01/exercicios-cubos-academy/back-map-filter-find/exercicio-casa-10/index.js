// const notas = [6, 8, 9, 8];

const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33]

const notasUnicas = [6];

notas.forEach ((item) => {

    const nota = notasUnicas.find(x => x === item);

    if (nota === undefined) {
        notasUnicas.push(item);
    }
});

console.log(notasUnicas);
