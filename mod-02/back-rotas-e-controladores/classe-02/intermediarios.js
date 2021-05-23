function validarSenha (req, res, next) {
    if(req.query.senha === "cubos123") {
        next();
    } else {
        res.status(401);
        res.json({erro: "Acesso negado. Senha incorreta."});
    }
};

module.exports = {validarSenha};