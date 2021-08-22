import React from 'react';
import './Profile.css';

import me from './rainer.jpg';

function Profile() {
    return(
        <div className="Profile">
            <img className="profile-photo" src={me} />
            <p>Hi there, my name is <strong>Ben Hankin</strong> and I'm an undergraduate studying <strong>Computer Science</strong> at the <strong>University of California, Los Angeles</strong>.</p>
            <p>I am deeply interested in technology and how it affects the human condition. Additionally, I am a geek for all things music and like to write, compose, and produce songs in my free time. Some of my other hobbies include hiking and studying reality-strategy competition shows.</p>
        </div>
    )
}

export default Profile;