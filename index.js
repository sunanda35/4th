var express = require('express')
require('./src/db/connection')

var app = express();

var PORT = 3000;

app.get('/', (req, res)=>{
    res.send('hello mother fucker');
})

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`)
})