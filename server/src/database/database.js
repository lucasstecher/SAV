const Sequelize = require('sequelize');

const connection = new Sequelize('VZt9exFvaK', 'VZt9exFvaK', 'xTxBRbpqCB',{
    host: 'remotemysql.com',
    port: 3306,
    user: 'VZt9exFvaK',
    password: 'xTxBRbpqCB',
    database: 'VZt9exFvaK',
    dialect: 'mysql'
});

module.exports = connection;