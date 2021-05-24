const Sequelize = require('sequelize');
const connection = require('../database/database');

const Gerente = connection.define('tb_gerente', {
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

Gerente.sync({force: false}).then(() => {});
Gerente.sync({ alter: true });