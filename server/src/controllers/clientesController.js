const Cliente = require("../models/Cliente");

module.exports = {
    async index (req, res)  {
        res.render('clientes', {root:'../../web/views'});
    },
    async store (req,res) {
        var nome = req.body.nome;
        var telefone = req.body.telefone;
        var cpf = req.body.cpf;
        var pontos = req.body.pontos;
        Cliente.create({
            nome_cliente: nome,
            tel_cliente: telefone,
            cpf_cliente: cpf,
            pontos_cliente: pontos
        }).then(() => {
            console.log('Cliente adicionado!');
            res.redirect("/clientes");
        })
    },
}
