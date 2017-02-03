

module.exports = function(app){

/*Define o comportamento do acesso a rota ativações por get*/
app.get('/ativacoes', function(request, response){

var sql = require('mssql');
var config = {
user:'eduardo',
password:'santos,1722',
server:'sqlweb.campanhaturbinesuasvendas.com.br',
database:'turbine5_dev'};

sql.connect(config,function(err){

if(err) console.log(err);

var request = new sql.Request();
request.query('select SUM(PONTOS) AS PONTOS from TB_ATIVACOES',function(err,recordset){

if(err) console.log(err);

response.send(recordset);

});
});

/*Define a view irá renderizar a resposta*/


//response.render("ativacoes/lista");
});

}

