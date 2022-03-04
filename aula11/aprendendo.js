const mongoose = require('mongoose');

// Configurando o mongoose

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/aprendendo').then(()=>{
  console.log('MongoDB conectado...');
}).catch((err)=>{
  console.log('Houve um erro ao se conectar ao mongoDB: '+err);
});

// Definindo o model

const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    requite: true
  },
  pais: {
    type: String
  }
})

// Collection
mongoose.model('users', UserSchema);

const newUser = mongoose.model('users');

new newUser({
  nome: 'Joao',
  sobrenome: 'da Silva',
  email: 'joaodasilva@gmail.com',
  idade: 35,
  pais: 'Brasil'
}).save().then(()=>{
  console.log('Usuário cadastrado com sucesso!')
}).catch((err)=>{
  console.log('Houve um erro ao registrar o usuário: '+err)
})
