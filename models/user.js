const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    post: Sequelize.STRING,
    description: Sequelize.STRING

})

module.exports = User;