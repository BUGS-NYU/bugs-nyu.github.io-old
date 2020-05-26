const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const mongoose = require('mongoose')
require('./db')
const Event = mongoose.model('Event')
const Profile = mongoose.model('Profile')
const Project = mongoose.model('Project')
const port = config.PORT

const app = express()
app.use(express.json())
app.use(cors())
  

app.get('/', (req, res) => {
    return res.send("<h1> Hello world </h1>")
})



app.get('/profiles', (req, res) => {
    Profile.find({}).then(profiles => {
        res.json(profiles.map(profile => profile.toJSON()))
    })
})

app.get('/projects', (req, res) => {
    Project.find({}).then(projects => {
        res.json(projects.map(projects => projects.toJSON()))
        // mongoose.connection.close()
    })
})

app.get('/events', (req, res) => {
    Event.find({}).then(events => {
        res.json(events.map(event => event.toJSON()))
        // mongoose.connection.close()
    })
})


app.post('/profiles/:profile', (req, res) => {
    const profile = new Profile(req.body)
    profile.save()
    .then(savedProfile => {return savedProfile.toJSON()})
    .then(formattedProfile => {
        res.json(formattedProfile)
    })
})

//add user auth here later
app.post('/events/:event', (req, res) => {
    const event = new Event(req.body)
    event.save()
    .then(savedEvent => {return savedEvent.toJSON()})
    .then(formattedEvent => {
        res.json(formattedEvent)
    })
})

app.post('/projects/:project', (req, res) => {
    const project = new Project(req.body)
    project.save()
    .then(savedProject => {return savedProject.toJSON()})
    .then(formattedProject => {
        res.json(formattedProject)
    })
})

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port)
})

