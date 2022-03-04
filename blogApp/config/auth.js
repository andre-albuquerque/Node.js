const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//Model de usuário
require('../models/Usuario')
const Usuario = mongoose.model('usuarios')


module.exports = (passport)=>{

  passport.use(new localStrategy({usernameField: 'email', passwordField: 'senha'}, (email, senha, done)=>{
    Usuario.findOne({email: email}).then((user)=>{
      if(!user){
        return done(null, false, {message: 'Esta conta não existe.'})
      }
      bcrypt.compare(senha, user.senha, (erro, batem) =>{
        if(batem){
          return done(null, user)
        }else{
          return done(null, false, {message: 'Senha incorreta'})
        }
      })
    })
  }))

  passport.serializeUser((user, done) =>{
    done(null, user.id)
  })

  passport.deserializeUser((id, done) =>{
    Usuario.findById(id, (err, user)=>{
      done(err, user)
    })
  })

}
