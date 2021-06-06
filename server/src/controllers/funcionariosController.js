module.exports = {
    async index (req, res) {
        res.sendFile('funcionarios.html', {root:'../../web/components'});
    },
    async store (req,res) {
        const Funcionario = require("../models/Funcionarios");
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


