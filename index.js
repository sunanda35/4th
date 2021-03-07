const express = require('express')
require('./src/db/connection')
const student = require('./src/router/student')
const auth = require('./src/auth/auth')

var app = express();

var PORT = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index')
})


app.use(express.json())
app.use(student)
app.use(auth)

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})