var express = require('express')
var app = express();

var PORT = 3000;

app.get('/', (req, res)=>{
    res.send('hello mother fucker');
})

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`)
})