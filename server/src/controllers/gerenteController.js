module.exports = {
    async index (req, res) {
        res.sendFile('gerente.html', {root:'../../web/components'});
    },
    async store (req,res) {
        const Gerente = require("../models/Gerente");
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


