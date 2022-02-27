const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res)=>{
    res.send('Seja bem-vindo ao meu app!')
});

app.get('/sobre', (req, res)=>{
    res.send('Minha página sobre')
});

app.get('/blog', (req, res)=>{
    res.send('Bem-vindo ao meu blog!')
});

app.get('/ola/:cargo/:nome/:cor', (req, res)=>{
    res.send(`<h1>Olá ${req.params.nome}</h1
    <h2>Seu cargo é: ${req.params.cargo}</h2>`)
})

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081')
});

