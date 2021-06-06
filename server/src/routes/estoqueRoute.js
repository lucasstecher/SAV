app.get("/estoque", (req, res) => {
    res.sendFile('estoque.html', {root:'../../web/components'});
});

app.get("/venda", (req, res) => {
    Estoque.findAll({raw:true}).then(tb_estoque =>{
        console.log(tb_estoque);
    });
    res.sendFile('venda.html', {root:'../../web/components'});
});