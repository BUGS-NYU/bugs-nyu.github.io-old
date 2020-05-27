import React from 'react';

const Profile = (props) => {
    const {member} = props
    
    return(
        <div>
            <h2> {member.name} </h2>
            <h3> Description: {member.description}</h3>
            <h3> Email: {member.email}</h3>
        </div>
    )
}

export default Profile;