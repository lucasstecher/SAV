const Estoque = require("../models/Estoque");

module.exports = {
    async index (req, res) {
        Estoque.findAll({raw:true, order:[
            ['nome_produto']
        ]}).then(estoque =>{
            res.render("estoque",{
                estoque: estoque 
            });
        });
    },
    async store (req,res) {
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
    async delete (req,res){
        Estoque.destroy({where: {'idt_produto': req.params.id}}).then(()=>{
            res.redirect('/estoque')
        }).catch((erro)=>{
            res.send('Produto não existe')
        })
    },
}


 /* app.get("/estoque", (req, res) => {
    Estoque.findAll({raw:true}).then(tb_estoque =>{
        res.render("estoque",{
            estoque: tb_estoque
        })
    });
}); */