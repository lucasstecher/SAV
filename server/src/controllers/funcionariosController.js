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
    async delete (req,res){
        Funcionario.destroy({where: {'idt_funcionario': req.params.id}}).then(()=>{
            res.redirect('/funcionarios')
        }).catch((erro)=>{
            res.send('Funcionário não existe')
        })
    },
    async edit(req, res){
        Funcionario.findOne({where: {'idt_funcionario': req.params.id}}).then((funcionario) => {
            res.render("../../web/views/editfuncionario", {funcionario: funcionario})
            
        }).catch((erro) => {
            res.send('Este funcionário não existe')
        })
    },
    async editfunc(req,res){
        Funcionario.findOne({where: {'idt_funcionario': req.body.id}}).then((funcionario)=> {
            funcionario.nome_funcionario = req.body.nome
            funcionario.login_funcionario = req.body.login
            funcionario.senha_funcionario = req.body.senha

            funcionario.save().then(()=>{
                
                res.redirect('/funcionarios')
            })

        }).catch((err) => {
            res.send('Houve um erro ao editar o funcionário.')
        })
    }, 
    async addfunc(req, res){
        res.render('addfuncionario', {root:'../../web/views'});
    },
    async loginfunc(req, res){
        res.render('loginfun');
    },
    async menufunc(req, res){
        res.render('menufun', {root:'../../web/views'});
    }
    
}


