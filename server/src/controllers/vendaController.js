//const Venda = require("../models/Vendas");

module.exports = {
    async index (req, res) {
        res.render('venda', {root:'../../web/views'});
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