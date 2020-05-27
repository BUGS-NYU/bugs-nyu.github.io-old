require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const app = express()
const apiRouter = require('./router/api')
const cors = require('cors')

app.use(cors())
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    // res.sendFile(__dirname + 'index')
    res.send('<h1> Hello world </h1>')
})

app.listen(PORT, (req, res) => {
    console.log('Listening on port ' + PORT)
})