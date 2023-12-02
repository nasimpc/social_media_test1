const Sequelize = require('sequelize');
const sequelize = new Sequelize('post', 'root', 'internship', {
  dialect: 'mysql',
  host: 'localhost'

})

module.exports = sequelize;