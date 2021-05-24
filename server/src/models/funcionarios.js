const Sequelize = require('sequelize');
const connection = require('../database/database');

const Funcionario = connection.define('tb_funcionario', {
    idt_functionario:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    nome_functionario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    login_functionario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha_functionario:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Funcionario.sync({force: false});
Funcionario.sync({ alter: false });

module.exports = Funcionario;