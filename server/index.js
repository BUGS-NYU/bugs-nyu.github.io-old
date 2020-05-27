const express = require('express')
const cors = require('cors')
const port = 3001
const db = require('./db')

const app = express()
app.use(express.json())
app.use(cors())
  
//@ToDo: closing mongo connection
app.get('/', (req, res) => {
    return res.send("<h1> Hello world </h1>")
})



app.get('/profiles', (req, res) => {
    db.ref('profiles/').on('value', (snapshot) => {
        const profiles = snapshot.val()
        res.json(profiles)
    })
})  

app.get('/projects', (req, res) => {
    db.ref('projects/').on('value', (snapshot) => {
        const projects = snapshot.val()
        res.json(projects)
    })
})

app.get('/events', (req, res) => {
    db.ref('events/').on('value', (snapshot) => {
        const events = snapshot.val()
        res.json(events)
    })
})


app.post('/profiles/:profile', (req, res) => {
    const profile = req.body
    const eboard = {
        name: profile.name,
        position: profile.position,
        description: profile.description,
        links: {
            github: profile.github ? profile.github : "",
            facebook: profile.facebook ? profile.facebook : "",
            email: profile.email ? profile.email : "",
            linkedin: profile.linkedin ? profile.linkedin : ""
        }
    }
    db.ref(`profiles/${profile.uid}`).set(eboard)
})

//add user auth here later
app.post('/events/:event', (req, res) => {
    const event = req.body
    const Event = {
        name: event.name,
        date: event.date,
        location: event.location,
        description: event.description,
        slides: event.slides ? event.slides : "No slides for this event"
    }
    db.ref(`events/${event.uid}`).set(Event)
})

app.post('/projects/:project', (req, res) => {
    const project = req.body
    const Project = {
        name: project.name,
        description: project.description,
        github: project.github
    }
    db.ref(`projects/${project.uid}`).set(Project)
})

app.listen(port, (req, res) => {
    console.log('Listening on port ' + port)
})

