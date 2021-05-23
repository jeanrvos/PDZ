const express = require("express");

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

const msgIdInvalido = {
    "mensagem": "O valor do parâmetro ID da URL não é um número válido."
};

const msgLivroInexistente = {
    "mensagem": "Não existe livro para o ID informado."
};

const msgLivroSubstituido = {
    "mensagem": "Livro substituído."
};

const msgImpossivelSubstituir = {
    "mensagem": "Não existe livro a ser substituído para o ID informado."
};

const msgLivroAlterado = {
    "mensagem": "Livro alterado."
};

const msgImpossivelAlterar = {
    "mensagem": "Não existe livro a ser alterado para o ID informado."
};

const msgLivroRemovido = {
    "mensagem": "Livro removido."
};

const msgImpossivelRemover = {
    "mensagem": "Não existe livro a ser removido para o ID informado."
};

let proximoId = 3;

app.get("/livros", (req, res) => {
    res.json(livros);
});

app.get("/livros/:id", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.id));

    if (!Number(req.params.id)) {
        res.json(msgIdInvalido);
    } else if(!livro) {
        res.json(msgLivroInexistente);
    } else {
        res.json(livro);
    } 
});

app.post("/livros", (req, res) => {
    const novoLivro = {
        id: proximoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };    
    livros.push(novoLivro);

    proximoId++; 

    res.json(novoLivro);
});

app.put("/livros/:id", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.id));

    if (!Number(req.params.id)) {
        res.json(msgIdInvalido);
    } else if(livro) {
        livro.titulo = req.body.titulo;
        livro.autor = req.body.autor;
        livro.ano = req.body.ano;
        livro.numPaginas = req.body.numPaginas;

        res.json(msgLivroSubstituido);
        
    } else {
        res.json(msgImpossivelSubstituir);        
    };
});

app.patch("/livros/:id", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.id));

    if (!Number(req.params.id)) {
        res.json(msgIdInvalido);
    } else if(livro) {
        if(req.body.titulo !== undefined) {
            livro.titulo = req.body.titulo;
        };
        if(req.body.autor !== undefined) {
            livro.autor = req.body.autor;
        };
        if(req.body.ano !== undefined) {
            livro.ano = req.body.ano;
        };
        if(req.body.titulo !== undefined) {
            livro.numPaginas = req.body.numPaginas;
        };
        res.json(msgLivroAlterado);        
    } else {
        res.json(msgImpossivelAlterar);        
    } 
});

app.delete("/livros/:id", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.id));

    if (!Number(req.params.id)) {
        res.json(msgIdInvalido);
    } else if(livro) {
        const indice = livros.indexOf(livro);
        livros.splice(indice,1);
        res.json(msgLivroRemovido);        
    } else {
        res.json(msgImpossivelRemover);        
    };
});

app.listen(8000);