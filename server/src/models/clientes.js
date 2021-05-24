const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cliente = connection.define('tb_cliente', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pontos:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Cliente.sync({force: false}).then(() => {});
Cliente.sync({ alter: true });