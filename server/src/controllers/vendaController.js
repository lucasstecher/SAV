//const Venda = require("../models/Vendas");
const Estoque = require("../models/Estoque");

module.exports = {
    async index (req, res) {
        Estoque.findAll({raw:true, order:[
            ['nome_produto']
        ]}).then(estoque =>{
            res.render("venda",{
                estoque: estoque 
            });
        });
    }
}
/*app.post("/salvarvenda", (req,res) =>{
    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;
    Venda.create({
       
    }).then(() => {
        console.log('Venda Feita!');
        res.redirect("/menu");
    })
});*/