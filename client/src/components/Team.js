import React from 'react'
import Profile from './Profile'

const Team = (props) => {
    const {eboard} = props
    return(
        <>
            {Object.entries(eboard).map(([i, member]) => 
                <Profile member = {member} />
            )}
        </>
    )
}

export default Team