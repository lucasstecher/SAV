const Sequelize = require('sequelize');
const connection = require('../database/database');

const Estoque = connection.define('tb_estoque', {
    idt_produto:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    nome_produto:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco_produto:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quant_produto:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    codigo_produto:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Estoque.sync({force: false});
Estoque.sync({ alter: false });

module.exports = Estoque;