// const mongoose = require('mongoose')
// const config = require('./utils/config')

// const Profile = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     type: String,
//     position: String,
//     description: {
//         type: String,
//         minlength: 10,
//         required: true
//     },
//     links: {
//         github: String,
//         facebook: String,
//         linkedin: String,
//         website: String
//     }
// })

// const Event = new mongoose.Schema({
//     name: {
//         type: String,
//         minlength: 5,
//         required: true
//     },
//     date: {
//         type: Date,
//         required: true
//     },
//     location: {
//         building: String,
//         room: String
//     },
//     link: {
//         slides: String,
//         recording: String
//     }
// })

// const Project = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     link: {
//         github: String,
//         website: String
//     },
//     mentors: String //change this later,
// })

// mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// module.exports = mongoose.model('Profile', Profile)
// module.exports = mongoose.model('Event', Event)
// module.exports = mongoose.model('Project', Project)

require('dotenv').config()
const firebase = require('firebase')
const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

firebase.initializeApp(config);

const db = firebase.database()

module.exports = db