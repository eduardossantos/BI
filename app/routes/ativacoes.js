
module.exports = function(app){
/*Define o comportamento do acesso a rota ativações por get*/
app.get('/ativacoes', function(request, response){
    var connection = app.infra.connectionFactory;
        connection.query('select ati.status as STATUS,count(idAtivacao) AS ATIVACAO ' +
            'from turbine5.dbo.TB_ATIVACOES ati' +
            ' left join turbine5.dbo.TB_STAKEHOLDERS ts on ati.CPF = ts.CPF' +
            ' where ts.idPerfil =1 and ts.status =1  group by ati.status',function(err,recordset){
    /*Define a view irá renderizar a resposta*/
    response.render('ativacoes/lista',{lista:recordset});
    //response.send(recordset);

});
});

    app.get('/pontosLTM', function(request, response){
        var connection = app.infra.connectionFactory;
        connection.query('use Turbine5_dev;' +
            ' drop table DiferencaLTM' +
            ' create table DiferencaLTM ( idResgate int,' +
            ' parent_order_id nvarchar(50), pontosRecebidoApiLTM float,' +
            ' pontosNaLoja int, diferenca float, data smalldatetime, dataPedido smalldatetime)' +
            'insert into Turbine5_dev.dbo.DiferencaLTM ' +
            'select res.idResgate,ltm.parent_order_id, ' +
            'ltm.total_points as pontosRecebidoApiLTM,  ' +
            'res.pontos,(convert(float,ltm.total_points) - convert(float,res.pontos)) as diferenca,' +
            ' res.dataHora as data, res.dataPedido' +
            ' from turbine5.dbo.tb_resgate_ltm_log ltm ' +
            'inner join turbine5.dbo.TB_RESGATES res ' +
            'on ltm.parent_order_id = res.numeroPedido ' +
            'select * from Turbine5_dev.dbo.DiferencaLTM ' +
            'where diferenca > 10.0' +
            'order by 1 asc',function(err,recordset){
            /*Define a view irá renderizar a resposta*/
            response.render('LTM/pontosLTM',{lista:recordset});
            //response.send(recordset);

        });
    });



}

