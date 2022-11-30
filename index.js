require('dotenv').config()
const express = require('express')
const app = express()

// Route to controllers
app.use('/video-games', require('./controllers/video-games'))
app.use('/religon', require('./controllers/religon'))
app.use('/nature', require('./controllers/nature'))

// Home Page
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Eat all Page
app.get('*', (req, res) => {
    res.status(404).send('<h1> 404 Page</h1>')
})

app.listen(process.env.PORT)