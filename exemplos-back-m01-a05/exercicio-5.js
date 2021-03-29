function apresentacao(pessoa) {
    if (pessoa.idade <= 25) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissão}.`);
    } else if (pessoa.idade < 66) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissão}.`);
    } else {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissão}.`);
    }
}

let joao = {
    nome: "João",
    idade: 65,
    profissão: "Administrador", 
    altura: 1.77
}

apresentacao(joao);