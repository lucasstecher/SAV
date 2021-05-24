// faz a requisição de express, algo semelhante ao #include em C ou import em py
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
const clienteModel = require("./models/Cliente");
//const estoqueModel = require("./models/Estoque");
//const funcionarioModel = require("./models/Funcionarios");
//const gerenteModel = require("./models/Gerente");
//const vendasModel = require("./models/Vendas");

// database

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!');
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// cria app com o módulo express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// permite leitura de dados de formulários enviados via json
app.use(bodyParser.json());

// define o local dos statics
app.use(express.static('../../'));


// .get especifica o que o que acontece quando o navegador
// entra em contato com o server e faz um get request
// o parâmetro '/' é a raiz, e a função é o que o servidor retorna
// REQ => DADOS ENVIADOS PELO USURÁRIO
// RES => RESPOSTA ENVIADA AO USUÁRIO
app.get("/", (req, res) => {
    res.sendFile('index.html', {root:'../../web'});
});

app.get("/menu", (req, res) => {
    res.sendFile('menu.html', {root:'../../web/components'});
});

app.get("/venda", (req, res) => {
    res.sendFile('venda.html', {root:'../../web/components'});
});

app.get("/estoque", (req, res) => {
    res.sendFile('estoque.html', {root:'../../web/components'});
});

app.get("/clientes", (req, res) => {
    res.sendFile('clientes.html', {root:'../../web/components'});
});

app.get("/funcionarios", (req, res) => {
    res.sendFile('funcionarios.html', {root:'../../web/components'});
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});

// MODIFICAR. Ela apenas entra no menu, sem autenticar
// está autenticando com valores pré definidos, editar para
// funcionar procurando no banco de dados, usar parâmetro talvez? (segurança)
// incluir alert ao errar login/senha
app.post("/autenticar", (req, res) => {
    if(req.body.usuario == 'gerente' && req.body.senha == 'gerente'){
        res.redirect('/menu');
    } else {
        res.redirect('/');
    }
})