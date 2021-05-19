const express = require("express");
// associa express a constante app
const app = express();


// .get especifica o que o que acontece quando o navegador
// entra em contato com o server e faz um get request
// o parâmetro '/' é a "localização" do get request, no caso sendo a raiz(homepage)
// quando o browser faz um get request em '/' ele retorna o que está abaixo:
// quando ocorre o get request ele retorna essa callback function, com os parâmetros
// req e res
app.get("/", function(req, res){
    res.send('hello world!');
});

app.listen(3000, function(){
    console.log('Server running on port 3000')
});