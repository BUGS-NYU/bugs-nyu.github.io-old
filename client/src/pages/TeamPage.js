import React, { useEffect, useState } from 'react';
import Team from '../components/Team'
const TeamPage = () => {
    const [members, setMembers] = useState([])

    const hook = () => {
        fetch('http://localhost:3001/api/profiles')
        .then(results => results.json())
        .then(data => 
          {
            const values = []
            Object.keys(data).forEach(member => {
              values.push(data[member])
            })
            setMembers(members.concat(values))
          }
        )
    }
    useEffect(hook, [])

    return(
        <div>
            <h1> Our Team </h1>
            <Team eboard = {members} />
        </div>
    )
}

export default TeamPage