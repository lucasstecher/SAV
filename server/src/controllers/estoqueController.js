module.exports = {
    async index (req, res) {
        res.sendFile('estoque.html', {root:'../../web/components'});
    },
    async store (req,res) {
        const Estoque = require("../models/Estoque");
        var nome = req.body.nome;
        var preco = req.body.preco;
        var quantidade = req.body.quantidade;
        var codigo = req.body.codigo;
        Estoque.create({
            nome_produto: nome,
            preco_produto: preco,
            quant_produto: quantidade,
            codigo_produto: codigo
        }).then(() => {
            console.log('Produto adicionado!');
            res.redirect("/estoque");
        })
    },
}


/* app.get("/venda", (req, res) => {
    Estoque.findAll({raw:true}).then(tb_estoque =>{
        console.log(tb_estoque);
    });
    res.sendFile('venda.html', {root:'../../web/components'});
}); */