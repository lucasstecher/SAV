const Funcionario = require("../models/Funcionarios");

module.exports = {
    async index (req, res) {
        res.sendFile('funcionarios.html', {root:'../../web/views'});
    },
    async store (req,res) {
        var nome = req.body.nome;
        var login = req.body.login;
        var senha = req.body.senha;
        Funcionario.create({
            nome_funcionario: nome,
            login_funcionario: login,
            senha_funcionario: senha
        }).then(() => {
            console.log('Funcionario adicionado!');
            res.redirect("/funcionarios");
        })
    },
}


