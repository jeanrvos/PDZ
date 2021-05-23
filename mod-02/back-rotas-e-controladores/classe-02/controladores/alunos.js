const alunos = require("../dados/alunos");
const cursos = require("../dados/cursos");

function listarAlunos(req, res) {
    res.status(200);
    res.json(alunos);
}

function buscarUmAluno(req, res) {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));

    if(!Number(req.params.id)) {
        res.status(400);
        res.json({erro: "O id deve ser um número válido."});
        return;
    }

    if(aluno) {
        res.status(200);
        res.json(aluno);
        return;
    } else {
        res.status(404);
        res.json({erro: `Não foi encontrado aluno com o id ${req.params.id}.`});
        return;
    }
}

let proximoId = 1;

function validarAluno(aluno) {
    if (!aluno.nome) {
        return "O campo 'nome' é obrigatório.";
    }

    if (!aluno.sobrenome) {
        return "O campo 'sobrenome' é obrigatório.";
    }

    if (!aluno.idade) {
        return "O campo 'idade' é obrigatório.";
    }

    if (!aluno.curso) {
        return "O campo 'curso' é obrigatório.";
    }

    if(typeof aluno.nome !== "string" || !aluno.nome.trim()) {
        return "O campo 'nome' deve ser preenchido com um texto.";
    }

    if(typeof aluno.sobrenome !== "string" || !aluno.sobrenome.trim()) {
        return "O campo 'sobrenome' deve ser preenchido com um texto.";
    }

    if(typeof aluno.idade !== "number") {
        return "O campo 'idade' deve ser preenchido com um número.";
    }

    if(typeof aluno.curso !== "string" || !aluno.curso.trim()) {
        return "O campo 'curso' deve ser preenchido com um texto.";
    }

    if(aluno.idade < 18) {
        return "A 'idade' mínima do aluno deve ser 18 anos.";
    }  

    if(!cursos.includes(aluno.curso)) {
        return "O curso informado é inválido.";
    }

}

function inserirAluno(req, res) {
    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400);
        res.json({erro});
        return;
    }

    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso
    };

    alunos.push(novoAluno);
    proximoId++;
    res.status(201);
    res.send("");
}

function editarAluno(req, res) {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));

    if(!Number(req.params.id)) {
        res.status(400);
        res.json({erro: "O id deve ser um número válido."});
        return;
    }

    const erro = validarAluno({       
        nome: req.body.nome ?? aluno.nome,
        sobrenome: req.body.sobrenome ?? aluno.sobrenome,
        idade: req.body.idade ?? aluno.idade,
        curso: req.body.curso ?? aluno.curso,

        
    });

    if (erro) {
        res.status(400);
        res.json({erro});
        return;
    }

    if (aluno) {
        if(req.body.nome !== undefined) {
            aluno.nome = req.body.nome;
        }
    
        if(req.body.sobrenome !== undefined) {
            aluno.sobrenome = req.body.sobrenome;
        }
    
        if(req.body.idade !== undefined) {
            aluno.idade = req.body.idade;
        }
    
        if(req.body.curso !== undefined) {
            aluno.curso = req.body.curso;
        }
        res.status(200);
        res.json(aluno);
    } else {
        res.status(404);
        res.json({erro: `Não foi encontrado aluno com o id ${req.params.id}.`});
        return;
    }
}

// PUT
function substituirAluno (req, res) {
    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400);
        res.json({erro});
        return;
    }

    if (req.body.id !== Number(req.params.id)) {
        res.status(400);
        res.json({erro: "O campo 'id' deve ser igual na rota e no corpo da requisição"});
        return;
    }

    const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));

    if(!Number(req.params.id)) {
        res.status(400);
        res.json({erro: "O id deve ser um número válido."});
        return;
    }

    if (aluno) {
        aluno.nome = req.body.nome;
        aluno.sobrenome = req.body.sobrenome;
        aluno.idade = req.body.idade;
        aluno.curso = req.body.curso;

        res.status(200);
        res.json(aluno);
    } else {
        res.status(404);
        res.json({erro: `Não foi encontrado aluno com o id ${req.params.id}.`});
        return;
    }

}

function excluirAluno(req, res) {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));

    const indice = alunos.indexOf(aluno);

    if(!Number(req.params.id)) {
        res.status(400);
        res.json({erro: "O id deve ser um número válido."});
        return;
    }

    if(aluno) {
        res.status(200);
        alunos.splice(indice, 1);
        res.json(aluno);
        return;
    } else {
        res.status(404);
        res.json({erro: `Não foi encontrado aluno com o id ${req.params.id}.`});
        return;
    }
}

module.exports = {
    listarAlunos,
    buscarUmAluno,
    inserirAluno,
    substituirAluno,
    editarAluno,
    excluirAluno
};