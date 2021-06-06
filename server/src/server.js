// faz a requisição de express, algo semelhante ao #include em C ou import em py
const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/database");
//const db = require("./models");

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

// rotas

// incluir alert ao errar login/senha
const usuarioRoute = require('./routes/usuarioRoute');
app.use(usuarioRoute);

const clientesRoute = require('./routes/clientesRoute');
app.use(clientesRoute);

const estoqueRoute = require('./routes/estoqueRoute');
app.use(estoqueRoute);

const funcionariosRoute = require('./routes/funcionariosRoute');
app.use(funcionariosRoute);

const gerenteRoute = require('./routes/gerenteRoute');
app.use(gerenteRoute);


app.listen(3000, () => {
    console.log('Server running on port 3000')
});

// database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!');
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })