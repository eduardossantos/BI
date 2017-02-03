module.exports = function(app){
/*Define o comportamento do acesso a rota ativações por get*/
app.get('/ativacoes', function(request, response){
    var connection = app.infra.connectionFactory;
        connection.query('select ati.status as STATUS,count(idAtivacao) AS ATIVACAO from TB_ATIVACOES ati' +
            ' left join TB_STAKEHOLDERS ts on ati.CPF = ts.CPF' +
            ' where ts.idPerfil =1 and ts.status =1  group by ati.status',function(err,recordset){
    /*Define a view irá renderizar a resposta*/
    response.render('ativacoes/lista',{lista:recordset});
    //response.send(recordset);
});
});
}

