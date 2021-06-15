const Gerente = require("../models/Gerente");

module.exports = {
    async index (req, res) {
        Gerente.findAll({raw:true, order:[
            ['nome_gerente']
        ]}).then(gerentes =>{
            res.render("gerentes",{
                gerentes: gerentes
            });
        });
    },
    async store (req,res) {
        var nome = req.body.nome;
        var login = req.body.login;
        var senha = req.body.senha;
        Gerente.create({
            nome_gerente: nome,
            login_gerente: login,
            senha_gerente: senha,
        }).then(() => {
            console.log('Gerente adicionado!');
            res.redirect("/gerentes");
        })
    },
    async delete (req,res){
        Gerente.destroy({where: {'idt_gerente': req.params.id}}).then(()=>{
            res.redirect('/gerentes')
        }).catch((erro)=>{
            res.send('Gerente não existe')
        })
    },
    async edit(req, res){
        Gerente.findOne({where: {'idt_gerente': req.params.id}}).then((gerente) => {
            res.render("../../web/views/editgerente", {gerente: gerente})
            
        }).catch((erro) => {
            res.send('Este funcionário não existe')
        })
    },
    async editger(req,res){
        Gerente.findOne({where: {'idt_gerente': req.body.id}}).then((gerente)=> {
            gerente.nome_gerente = req.body.nome
            gerente.login_gerente = req.body.login
            gerente.senha_gerente = req.body.senha

            gerente.save().then(()=>{
                
                res.redirect('/gerentes')
            })

        }).catch((err) => {
            res.send('Houve um erro ao editar o gerente.')
        })
    }, 
    async addger(req, res){
        res.render('addgerente', {root:'../../web/views'});
    }
}


