const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cliente = connection.define('tb_cliente', {
    idt_cliente:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    nome_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tel_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pontos_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Cliente.sync({force: false});
Cliente.sync({ alter: false });

module.exports = Cliente;