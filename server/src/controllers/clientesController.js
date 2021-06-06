module.exports = {
    
    async index (req, res)  {
        res.sendFile('clientes.html', {root:'../../web/components'});
    },
    async store (req,res) {
        const Cliente = require("../models/Cliente");
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
