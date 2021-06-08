const Gerente = require("../models/Gerente");

module.exports = {
    async index (req, res) {
        res.render('gerente', {root:'../../web/views'});
    },
    async store (req,res) {
        var nome = req.body.nome;
        var login = req.body.login;
        var senha = req.body.senha;
        Gerente.create({
            nome_gerente: nome,
            login_gerente: login,
            senha_gerente: senha,
        }).then(() => {
            console.log('Gerente adicionado!');
            res.redirect("/gerente");
        })
    }
}


