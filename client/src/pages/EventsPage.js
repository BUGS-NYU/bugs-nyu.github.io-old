import React, { useEffect, useState } from 'react'
import Events from '../components/Events'
const EventsPage = () => {
    const [events, setEvent] = useState([])

    const hook = () => {
        fetch('http://localhost:3001/api/events')
        .then(results => results.json())
        .then(data => 
        {
            const values = []
            Object.keys(data).forEach(member => {
            values.push(data[member])
            })
            setEvent(events.concat(values))
        })
    }

    useEffect(hook, [])
    return(
        <div>
            <h1> Events </h1>
            <Events events = {events} />
        </div>
    )
}

export default EventsPage