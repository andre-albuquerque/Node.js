const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'andre', 'andreleo', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
  console.log('Conectado com sucesso!')
}).catch((erro)=>{
  console.log('Falha ao conectar ' + erro)
});
