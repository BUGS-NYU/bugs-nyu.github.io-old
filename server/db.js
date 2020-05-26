const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    name: String,
    type: String,
    position: String,
    description: String,
    links: {
        github: String,
        facebook: String,
        linkedin: String,
        website: String
    }
})

const Event = new mongoose.Schema({
    name: String,
    date: Date,
    location: {
        building: String,
        room: String
    },
    link: {
        slides: String,
        recording: String
    }
})

const Project = new mongoose.Schema({
    name: String,
    link: {
        github: String,
        website: String
    },
    mentors: String //change this later,
})

module.exports = mongoose.model('Profile', Profile)
module.exports = mongoose.model('Event', Event)
module.exports = mongoose.model('Project', Project)
