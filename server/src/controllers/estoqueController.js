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
    async edit(req, res){
        Estoque.findOne({where: {'idt_produto': req.params.id}}).then((estoque) => {
            res.render("../../web/views/formest", {estoque: estoque})
            //res.redirect('/estoque')
        }).catch((erro) => {
            res.send('Este produto não existe')
        })
    } ,
    async edite(req,res){
        Estoque.findOne({where: {'idt_produto': req.body.id}}).then((estoque)=> {
            estoque.nome_produto = req.body.nome
            estoque.preco_produto = req.body.preco
            estoque.quantidade_produto = req.body.quantidade
            estoque.codigo_produto = req.body.codigo

            estoque.save().then(()=>{
                //res.send('Produto editado com sucesso!')
                res.redirect('/estoque')
            }).catch((err) => {
                //res.send('Houve um erro interno ao salvar o produto.')
            })

        }).catch((err) => {
            res.send('Houve um erro ao editar o produto.')
        })
    }
}