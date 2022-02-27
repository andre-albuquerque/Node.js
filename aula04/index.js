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

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081')
});

