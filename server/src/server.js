// faz a requisição de express, algo semelhante ao #include em C ou import em py
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
// cria app com o módulo express

app.use(bodyParser.urlencoded({extended: true}));
// permite leitura de dados de formulários enviados via json
app.use(bodyParser.json());

//ejs como view engine
app.set('view engine', 'ejs');

// define o local dos statics
app.use(express.static('../../'));

// rotas

const menuRoute = require('./routes/menuRoute');
app.use(menuRoute);

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

//incluir routes/controller de vendas

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