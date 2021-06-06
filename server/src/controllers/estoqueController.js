const Estoque = require("../models/Estoque");
app.post("/salvarestoque", (req,res) =>{
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
});