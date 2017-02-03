var mssql = require('mssql');
module.exports = function(){
    var config = {
        user:'eduardo',
        password:'santos,1722',
        server:'sqlweb.campanhaturbinesuasvendas.com.br',
        database:'turbine5'};
    mssql.connect(config,function(err){
        if(err) console.log(err);
    });
    var request = new mssql.Request();
    return request;
}

