const Venda = require("../models/Vendas");
const Estoque = require("../models/Estoque");

module.exports = {
    async index (req, res) {
        Estoque.findAll({raw:true, order:[
            ['nome_produto']
        ]}).then(estoque =>{
            res.render("venda",{
                estoque: estoque,
            });
        });
    },
    async incluir(req, res) {
        const connection = require("../database/database");
        var codigo = req.body.pesquisa;
        const [results] = await connection.query(`SELECT * FROM tb_estoque WHERE codigo_produto = '${codigo}'`);
    }
}