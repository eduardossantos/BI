/*Chamada a função que carrega e instancia um objeto do express.*/
var app = require('./config/express')();

/*Usa a instância do express para levantar um servidor na porta 8088*/
app.listen(8088,function(){
console.log("Servidor rodando");

});
