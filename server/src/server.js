// faz a requisição de express, algo semelhante ao #include em C ou import em py
const express = require("express");
const bodyParser = require("body-parser");
// const session = require("express-session");
const connection = require("./database/database");
const Cliente = require("./models/Cliente");
const Estoque = require("./models/Estoque");
const Funcionario = require("./models/Funcionarios");
const Gerente = require("./models/Gerente");
const Venda = require("./models/Vendas");

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

// session para login
/* app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()); */


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


app.post('/autenticar', async (req, res) => {
	var usuario = req.body.usuario;
	var senha = req.body.senha;
	if (usuario && senha) {
        const [results] = await connection.query(`SELECT * FROM tb_gerente WHERE login_gerente = '${usuario}' AND senha_gerente = '${senha}'`);
			if (results.length > 0) {
				res.redirect('/menu');
			} else {
				res.redirect('/');
			}
            res.end();
	}
});




app.post("/salvarcliente", (req,res) =>{
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
        res.redirect("/");
    })
});

app.post("/salvarestoque", (req,res) =>{
    var nome = req.body.nome;
    var preco = req.body.preco;
    var quantidade = req.body.quantidade;
    var codigo = req.body.codigo;
    Estoque.create({
        nome_produto: nome,
        preco_produto: preco,
        quant_produto: quantidade,
        codigo_produto: codigo
    }).then(() => {
        console.log('Produto adicionado!');
        res.redirect("/");
    })
});

app.post("/salvarfuncionario", (req,res) =>{
    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;
    Funcionario.create({
        nome_funcionario: nome,
        login_funcionario: login,
        senha_funcionario: senha
    }).then(() => {
        console.log('Funcionario adicionado!');
        res.redirect("/");
    })
});

app.post("/salvargerente", (req,res) =>{
    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;
    Gerente.create({
        nome_gerente: nome,
        login_gerente: login,
        senha_gerente: senha,
    }).then(() => {
        console.log('Gerente adicionado!');
        res.redirect("/");
    })
});

app.get("/gerente", (req, res) => {
    res.sendFile('gerente.html', {root:'../../web/components'});
});

/*app.post("/salvarvenda", (req,res) =>{
    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;
    Venda.create({
        nome_gerente: nome,
        login_gerente: login,
        senha_gerente: senha,
    }).then(() => {
        console.log('Gerente adicionado!');
        res.redirect("/");
    })
});*/