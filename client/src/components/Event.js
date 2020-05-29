import React from 'react';

const Event = (props) => {
    const {event} = props
    return(
        <div>
            <div> {event.name}</div>
            <div> {event.description} </div>
            <div> {event.date} </div>
            <div> {event.slides} </div>
        </div>
    )
}

export default Event