//  Conexão ao banco de dados mysql
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'andre', 'andreleo', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};
