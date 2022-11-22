require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/video-games', (req, res) => {
    res.send('Video Game Background')
})

app.get('/nature', (req, res) => {
    res.send('Nature Background')
})

app.get('/monuments', (req, res) => {
    res.send('Monuments Background')
})

app.get('*', (req, res) => {
    
})

app.listen(process.env.PORT)