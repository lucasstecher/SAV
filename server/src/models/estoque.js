const Sequelize = require('sequelize');
const connection = require('../database/database');

const Estoque = connection.define('tb_estoque', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    codigo:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Estoque.sync({force: false}).then(() => {});
Estoque.sync({ alter: true });