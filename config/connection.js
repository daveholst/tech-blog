require('dotenv').config();
const Sequelize = require('sequelize');

console.log(process.env.JAWSDB_URL);
const sequelize = new Sequelize(process.env.JAWSDB_URL);

module.exports = sequelize;
