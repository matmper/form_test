const express = require('express')
const app = require('./src/config/server')
const bodyParsert = require('body-parser')
const porta = process.env.PORTA

const path = require('node:path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))

app.use(express.static(path.join(__dirname,'src', 'public')))
app.use(express.urlencoded({ extended: true}))

app.use(bodyParsert.urlencoded({extended: false}))
app.use(bodyParsert.json())

app.listen(porta,() => {console.log(`Server running on http://localhost:${porta}`)})