const express = require('express')
const cors = require('cors')
const port = 3001

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.send("<h1> Hello world </h1>")
})

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port)
})

