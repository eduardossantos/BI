/*Carrega e instância o objeto do express.*/
var app = require('express')();
/*Usa a instância do express(app) para setar o tipo de view*/
app.set('view engine','ejs');
app.set('views','./app/views')

module.exports = function(){
/*Carrega o módulo express*/
/*retorna o objeto do express*/
return app;
}
