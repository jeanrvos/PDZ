const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

// programadores maiores de 20 anos

const programadorMaiorDeVinte = pessoas.filter( x => x.profissao === "Programador" && x.idade > 20);

console.log(`Programadores com mais de 20 anos: \n`);
console.log(programadorMaiorDeVinte);


// jornalistas maiores de 30 anos

const jornalistaMaiorDeTrinta = pessoas.filter(x => x.profissao === "Jornalista" && x.idade > 30);

console.log(`\nJornalistas com mais de 30 anos: \n`);
console.log(jornalistaMaiorDeTrinta);


// jornalistas e programadores até 29 anos

const profissionaisJovens = pessoas.filter(x => x.idade < 30);

console.log(`\nProfissionais jovens: \n`);
console.log(profissionaisJovens);