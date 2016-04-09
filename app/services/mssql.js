'use strict';
/**
 * Microsft SQL Server facade service.
 * @module mssql
 */
const sql = require('mssql');
const config = require('config');
sql.Promise = require('bluebird');

sql.connect(config.get('msssql'))
  .then(() => {
    new sql.Request().query('select * from ms_licitacion')
      .then(console.dir)
      .catch(console.log);
  }).catch(console.log);

module.exports = sql;
