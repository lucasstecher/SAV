// faz a requisição de express, algo semelhante ao #include em C ou import em py
const express = require("express");
// cria app com o módulo express
const app = express();

//
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
    res.send('Menu');
});

app.get("/venda", function(req, res){
    res.send('Venda');
});

app.get("/estoque", function(req, res){
    res.send('Estoque');
});

app.get("/clientes", function(req, res){
    res.send('Clientes');
});

app.get("/funcionarios", function(req, res){
    res.send('Funcionarios');
});

app.listen(3000, function(){
    console.log('Server running on port 3000')
});