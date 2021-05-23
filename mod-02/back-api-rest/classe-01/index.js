const express = require("express");

const app = express();
app.use(express.json());

const msgConvidadoPresente = { 
    mensagem : "Convidado presente."
};

const msgConvidadoAusente = {
    mensagem : "O convidado buscado não está presente na lista."
};

const msgConvidadoNaLista = {
    mensagem : "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
};

const msgConvidadoAdicionado = {
    mensagem: "Convidado adicionado."
};

const msgConvidadoInexistente = {
    "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
};

const msgConvidadoRemovido = {
    "mensagem": "Convidado removido."
};

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];


app.get("/convidados", (req, res) => {
    const nome = req.query.nome;

    if(nome === undefined) {
        res.json(convidados);
    } else {
        const convidado = convidados.find(convidado => convidado === nome);

        if (convidado === undefined) {
            res.json(msgConvidadoAusente);
        } else {
            res.json(msgConvidadoPresente);
        }
    }
});

app.post("/convidados", (req, res) => {
    const novoConvidado = convidados.find(convidado => convidado === req.body.nome);

    if (novoConvidado === undefined) {
        convidados.push(req.body.nome);
        res.json(msgConvidadoAdicionado);
    } else {
        res.json(msgConvidadoNaLista);
    }
});

app.delete("/convidados/:nome", (req, res) => {
    const convidado = convidados.find(convidado => convidado === req.params.nome);

    const indice = convidados.indexOf(convidado);

    if (convidado === undefined) {
        res.json(msgConvidadoInexistente);
    } else {
        convidados.splice(indice,1);
        res.json(msgConvidadoRemovido);
    }
});

app.listen(8000);