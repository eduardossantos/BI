var mssql = require('mssql');

function conectaMSSQL(callback) {

    var config = {
        user:'eduardo',
        password:'santos,1722',
        server:'sqlweb.campanhaturbinesuasvendas.com.br',
        database:'turbine5'};
    mssql.connect(config,function(err){
        if(err) {
            console.log(err)
        }else {
            console.log("conectado");
            var request = new mssql.Request();
            callback(err,request);
        }
    });


}

module.exports = function(){

   return conectaMSSQL;
}

