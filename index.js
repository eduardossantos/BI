/*Carrega o módulo e instancia um objeto do express*/
var express = require('express');

var app = express();
/*Usa a instância do express(app) para setar o tipo de view*/
app.set('view engine','ejs');

/*Define o comportamento do acesso a rota ativações por get*/
app.get('/ativacoes', function(request, response){

/*Define a view irá renderizar a resposta*/
response.render("ativacoes/lista");
});
/*Usa a instância do express para levantar um servidor na porta 8088*/
app.listen(8088,function(){
console.log("Servidor rodando");
});
