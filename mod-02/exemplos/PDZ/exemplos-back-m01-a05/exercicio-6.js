function verificarFaseDaVida (idade) {
    if (idade < 25) {
        return "jovem";
    } else if (idade < 66) {
        return "adulto";
    } else {
        return "idoso";
    }
}

function apresentacao(pessoa) {

    const faseDaVida = verificarFaseDaVida(pessoa.idade);
    
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${faseDaVida} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissão}.`);
    
}

let joao = {
    nome: "João",
    idade: 24,
    profissão: "Administrador", 
    altura: 1.77
}

apresentacao(joao);