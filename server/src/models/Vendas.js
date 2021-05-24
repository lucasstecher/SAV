const Sequelize = require('sequelize');
const connection = require('../database/database');

const Venda = connection.define('tb_venda', {
    date:{
        type: Sequelize.DATE,
        allowNull: false
    }
})

Venda.sync({force: false});
Venda.sync({ alter: false });

module.exports = Venda;