const { Sequelize  } = require('sequelize');

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false,
});

module.exports = database;