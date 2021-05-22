// faz a requisição de express, algo semelhante ao #include em C ou import em py
const express = require("express");
const bodyParser = require("body-parser");

// cria app com o módulo express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// define o local dos statics
app.use(express.static('../../'));


// .get especifica o que o que acontece quando o navegador
// entra em contato com o server e faz um get request
// o parâmetro '/' é a "localização" do get request, no caso sendo a raiz(homepage)
// quando o browser faz um get request em '/' ele retorna o que está abaixo:
// quando ocorre o get request ele retorna essa callback function, com os parâmetros
// req e res
app.get("/", function(req, res){
    res.sendFile('index.html', {root:'../../web'});
});

app.get("/menu", function(req, res){
    res.sendFile('menu.html', {root:'../../web/components'});
});

app.get("/venda", function(req, res){
    res.sendFile('venda.html', {root:'../../web/components'});
});

app.get("/estoque", function(req, res){
    res.sendFile('estoque.html', {root:'../../web/components'});
});

app.get("/clientes", function(req, res){
    res.sendFile('clientes.html', {root:'../../web/components'});
});

app.get("/funcionarios", function(req, res){
    res.sendFile('funcionarios.html', {root:'../../web/components'});
});

app.listen(3000, function(){
    console.log('Server running on port 3000')
});

//modificar, apenas entra no menu, sem autenticar
// autentica com valores pré definidos, editar para
// funcionar procurando no banco de dados
app.post("/autenticar", function(req, res){
    if(req.body.usuario == 'gerente' && req.body.senha == 'gerente'){
        res.redirect('/menu');
    } else {
        res.redirect('/');
    }
})

// incluir rota /autenticar para login, método post
// máscara js para entrada de dados (pontuar a entrada)
// oder by no sql para apresentar as vendas, e filtrar(tipos de produto), e pela data