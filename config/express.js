/*Carrega e instância o objeto do express.*/
var express = require('express');
/*Informa quais serão os módulos carregados automaticamente*/
var load = require('express-load');


module.exports = function(){
    var app = express();
    /*Usa a instância do express(app) para setar o tipo de view*/
    app.set('view engine','ejs');
    app.set('views','./app/views');

    load('routes',{cwd:'app'})
        .then('infra')
        .into(app);

    /*retorna o objeto do express*/
    return app;
}
