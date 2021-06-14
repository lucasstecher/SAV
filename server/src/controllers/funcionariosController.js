const Funcionario = require("../models/Funcionarios");

module.exports = {
    async index (req, res)  {
        Funcionario.findAll({raw:true, order:[
            ['nome_funcionario']
        ]}).then(funcionarios =>{
            res.render("funcionarios",{
                funcionarios: funcionarios 
            });
        });
    },
    async store (req,res) {
        var nome = req.body.nome;
        var login = req.body.login;
        var senha = req.body.senha;
        Funcionario.create({
            nome_funcionario: nome,
            login_funcionario: login,
            senha_funcionario: senha
        }).then(() => {
            console.log('Funcionario adicionado!');
            res.redirect("/funcionarios");
        })
    },
}


