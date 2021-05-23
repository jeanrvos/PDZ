const nomes = ['Juninho Play', 'Léo', 'Guido Cerqueira', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

let nickName = "";

function geradorDeNicks (nomes) {
    for (i = 0; i < nomes.length; i++) {
        const nomeMinusculo = (nomes[i].toLowerCase());
        const arrayNome = nomeMinusculo.split(" ");

        arrayNome.splice(0, 0, "@");

        nickName = arrayNome.join("");

        if (nickName.length > 13) {
            const nickNameEncurtado = nickName.substr(0, 13); 
            console.log (nickNameEncurtado);
        } else {
            console.log (nickName);
        }        
    }
}

geradorDeNicks (nomes);


/* const nome = "Anderson Oliveira";

function gerarNickname(nome) {
    const nickname = nome.trim().toLowerCase().substr(0, 13).split(' ').join('');
    console.log(`@${nickname}`);
}

gerarNickname(nome); */