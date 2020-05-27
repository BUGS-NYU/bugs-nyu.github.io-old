import React from 'react'
import Event from './Event'

const Events = (props) => {
    const {events} = props

    return(
        <div>
            {Object.entries(events).map(([i, event]) => {
                return <Event event = {event} />
            })}
        </div>
    )
}

export default Events