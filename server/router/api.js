const express = require('express')
const router = express.Router()
const db = require('../db')

  
//@ToDo: closing firebase connection
router.get('/', (req, res) => {
    return res.send("<h1> Hello world </h1>")
})


// Adding error handling
router.get('/profiles', (req, res) => {
    db.ref('profiles/').on('value', (snapshot) => {
        const profiles = snapshot.val()
        res.json(profiles)
    })
})  

router.get('/projects', (req, res) => {
    db.ref('projects/').on('value', (snapshot) => {
        const projects = snapshot.val()
        res.json(projects)
    })
})

router.get('/events', (req, res) => {
    db.ref('events/').on('value', (snapshot) => {
        const events = snapshot.val()
        res.json(events)
    })
})


router.post('/profiles/:profile', (req, res) => {
    const profile = req.params.body
    console.log(profile)
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
router.post('/events/:event', (req, res) => {
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

router.post('/projects/:project', (req, res) => {
    const project = req.body
    const Project = {
        name: project.name,
        description: project.description,
        github: project.github
    }
    db.ref(`projects/${project.uid}`).set(Project)
})


module.exports = router
