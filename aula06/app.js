const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', (req, res)=>{
    res.sendFile(__dirname + '/html/sobre.html')
})

app.listen(8081, ()=>{console.log('Servidor rodando na url http://localhost:8081')}) 