import React, { useState } from 'react';

const HomePage = () => {
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
        setEvent(events.concat(values))
      }
    )
  }
  return (
   <div>
     <h1>
       BUGS@NYU - The Open Source Club at NYU
     </h1>
     <h2> About Us </h2>
     <div>
      NYU BUGS is the open source club at NYU. 
      We promote open source by engaging students 
      through collaborative projects, hosting industry professions,
      and running open source workshops. 
     </div>
     <h2> What's Open Source? </h2>
     <div>
        Open source represents a form of licensing that 
        encourages collaboration and transparency. 
        Although open source licenses may take a number 
        of forms, essential features include being able to 
        freely study, change, and distribute the source code. 
     </div>
     <h2> Mozilla PartnerShip </h2>
     <div>
        BUGS is a member of the Open 
        Source Student Network, a network of 
        university clubs and students that share 
        the belief that open source software is the 
        engine that powers innovation. 
     </div>
   </div>
  );
}

export default HomePage;
