const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const port = config.PORT

const app = express()
app.use(express.json())
app.use(cors())
  
//@ToDo: closing mongo connection
app.get('/', (req, res) => {
    return res.send("<h1> Hello world </h1>")
})



app.get('/profiles', (req, res) => {
    
})

app.get('/projects', (req, res) => {

})

app.get('/events', (req, res) => {

})


app.post('/profiles/:profile', (req, res) => {

})

//add user auth here later
app.post('/events/:event', (req, res) => {

})

app.post('/projects/:project', (req, res) => {

})

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port)
})

