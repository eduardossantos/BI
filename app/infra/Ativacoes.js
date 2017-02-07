function Ativacoes(connection) {
    this._connection = connection;

}

Ativacoes.prototype.lista = function (callback) {
    this._connection.query('select ati.status as STATUS,count(idAtivacao) AS ATIVACAO ' +
        'from turbine5.dbo.TB_ATIVACOES ati' +
        ' left join turbine5.dbo.TB_STAKEHOLDERS ts on ati.CPF = ts.CPF' +
        ' where ts.idPerfil =1 and ts.status =1  group by ati.status', callback);
}

module.exports = function () {
        return Ativacoes;
}