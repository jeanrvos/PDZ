let joao = {
    nome: "João",
    idade: 26,
    profissão: "Administrador", 
    altura: 1.77,
    apresentacao: function () {

        const faseDaVida = this.verificarFaseDaVida();
        
        console.log(`Olá! Meu nome é ${this.nome}, sou um ${faseDaVida} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissão}.`);
        
    },
    verificarFaseDaVida: function () {
        if (this.idade < 25) {
            return "jovem";
        } else if (this.idade < 66) {
            return "adulto";
        } else {
            return "idoso";
        }
    }
};

joao.apresentacao();