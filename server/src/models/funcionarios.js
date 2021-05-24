const Sequelize = require('sequelize');
const connection = require('../database/database');

const Funcionario = connection.define('tb_funcionario', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Funcionario.sync({force: false}).then(() => {});
Funcionario.sync({ alter: true });