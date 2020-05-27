import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './components/Team';
import Events from './components/Events'

const App = () => {
  const [profiles, setProfile] = useState([])
  const [events, setEvent] = useState([])

  const getProfiles = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/profiles')
    .then(results => results.json())
    .then(data => 
      {
        const values = []
        Object.keys(data).forEach(member => {
          values.push(data[member])
        })
        setProfile(profiles.concat(values))
      }
    )
  }

  const getEvents = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/events')
    .then(results => results.json())
    .then(data => 
      {
        const values = []
        Object.keys(data).forEach(member => {
          values.push(data[member])
        })
        setEvent(profiles.concat(values))
      }
    )
  }

  return (
   <div>
     <button onClick = {getProfiles}>
       Get Profiles
     </button>
     <Team eboard = {profiles} >

     </Team>
     <p />
     <button onClick = {getEvents}>
       Get Events
     </button>
     <Events events = {events} />
   </div>
  );
}

export default App;
