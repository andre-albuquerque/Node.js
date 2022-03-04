const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'andre', 'andreleo', {
  host: 'localhost',
  dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

// Postagem.sync({force: true});

/*
Postagem.create({
  titulo: 'TITULO DE TESTE',
  conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
});
*/

const Usuario = sequelize.define('usuarios', {
  nome:{
    type: Sequelize.STRING
  },
  sobrenome:{
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

//Usuario.sync({force: true});

Usuario.create({
  nome: 'Andre',
  sobrenome: 'Albuquerque',
  idade: 29,
  email: 'andrealbuquerqueleo@gmail.com'
})
