

module.exports = function(app){

/*Define o comportamento do acesso a rota ativações por get*/
app.get('/ativacoes', function(request, response){

/*Define a view irá renderizar a resposta*/
response.render("ativacoes/lista");
});

}

