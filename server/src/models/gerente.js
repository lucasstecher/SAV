const Sequelize = require('sequelize');
const connection = require('../database/database');

const Gerente = connection.define('tb_gerente', {
    idt_gerente:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    nome_gerente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    login_gerente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha_gerente:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Gerente.sync({force: false});
Gerente.sync({ alter: false });

module.exports = Gerente;