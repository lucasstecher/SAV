const Cliente = require("../models/Cliente");

module.exports = {
    async index (req, res)  {
        Cliente.findAll({raw:true, order:[
            ['nome_cliente']
        ]}).then(clientes =>{
            res.render("clientes",{
                clientes: clientes 
            });
        });
    },
    async store (req,res) {
        var nome = req.body.nome;
        var telefone = req.body.telefone;
        var cpf = req.body.cpf;
        var pontos = req.body.pontos;
        Cliente.create({
            nome_cliente: nome,
            tel_cliente: telefone,
            cpf_cliente: cpf,
            pontos_cliente: pontos
        }).then(() => {
            console.log('Cliente adicionado!');
            res.redirect("/clientes");
        })
    },
    async delete (req,res){
        Cliente.destroy({where: {'idt_cliente': req.params.id}}).then(()=>{
            res.redirect('/clientes')
        }).catch((erro)=>{
            res.send('Cliente não existe')
        })
    },
    async edit(req, res){
        Cliente.findOne({where: {'idt_cliente': req.params.id}}).then((cliente) => {
            res.render("../../web/views/editcliente", {cliente: cliente})
            
        }).catch((erro) => {
            res.send('Este cliente não existe')
        })
    },
    async editcliente(req,res){
        Cliente.findOne({where: {'idt_cliente': req.body.id}}).then((cliente)=> {
            cliente.nome_cliente = req.body.nome
            cliente.tel_cliente = req.body.telefone
            cliente.cpf_cliente = req.body.cpf
            cliente.pontos_cliente = req.body.pontos

            cliente.save().then(()=>{
                
                res.redirect('/clientes')
            })

        }).catch((err) => {
            res.send('Houve um erro ao editar o cliente.')
        })
    }, 
    async addcliente(req, res){
        res.render('addcliente', {root:'../../web/views'});
    },
    async clientefun(req, res){
        Cliente.findAll({raw:true, order:[
            ['nome_cliente']
        ]}).then(clientes =>{
            res.render("clientesfun",{
                clientes: clientes 
            });
        });
    },
    async addclifun(req, res){
        res.render('addclientefun', {root:'../../web/views'}); 
    },
    async editfun(req,res){
        Cliente.findOne({where: {'idt_cliente': req.body.id}}).then((cliente)=> {
            cliente.nome_cliente = req.body.nome
            cliente.tel_cliente = req.body.telefone
            cliente.cpf_cliente = req.body.cpf
            cliente.pontos_cliente = req.body.pontos

            cliente.save().then(()=>{
                
                res.redirect('/clientesfun')
            })

        }).catch((err) => {
            res.send('Houve um erro ao editar o cliente.')
        })
    },
    async editclientefun(req, res){
        Cliente.findOne({where: {'idt_cliente': req.params.id}}).then((cliente) => {
            res.render("../../web/views/editclientefun", {cliente: cliente})
            
        }).catch((erro) => {
            res.send('Este cliente não existe')
        })
    },
    async storefun (req,res) {
        var nome = req.body.nome;
        var telefone = req.body.telefone;
        var cpf = req.body.cpf;
        var pontos = req.body.pontos;
        Cliente.create({
            nome_cliente: nome,
            tel_cliente: telefone,
            cpf_cliente: cpf,
            pontos_cliente: pontos
        }).then(() => {
            console.log('Cliente adicionado!');
            res.redirect("/clientesfun");
        })
    }
}