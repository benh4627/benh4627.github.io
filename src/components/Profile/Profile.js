import React from 'react';
import './Profile.css';
import ProjectCard from '../ProjectCard/ProjectCard';

import me from './rainer.jpg';
import spotifollow from './Spotifollow.png';
import escVel from './escapeVelocity.png';
import titanic from './titanicPanic.png';

function Profile() {
    return(
        <div className="Profile">
            <img className="profile-photo" src={me} />
            <p>Hi there, my name is <strong>Ben Hankin</strong> and I'm an undergraduate studying <strong>Computer Science</strong> at the <strong>University of California, Los Angeles</strong>.</p>
            <p>I am deeply interested in technology and how it intersects with all things entertainment. Additionally, I am a music geek and like to write, compose, and produce songs in my free time. Some of my other hobbies include hiking and listening to podcasts.</p>
            <hr/>
            <ProjectCard 
                image={spotifollow}
                projectName='Spotifollow'
                specs='Web Application | 2021'
                technologies='Spotify API, React, Node.js'
                moreInfo='More info to be added'
                className='t1'
                url='https://github.com/benh4627/spotifollow'
            />
            <ProjectCard 
                image={escVel}
                projectName='Escape Velocity'
                specs='Mobile Game | 2020'
                technologies='Unity API, C#'
                moreInfo='More info to be added'
                className='t1'
                url='https://github.com/benh4627/Escape-Velocity'
            />
            <ProjectCard 
                image={titanic}
                projectName='Titanic Panic'
                specs='WebGL Graphics Game | 2020'
                technologies='Javascript, HTML/CSS, TinyGraphics'
                moreInfo='More info to be added'
                className='t1'
                url='https://github.com/benh4627/CS174A_TitanicPanic'
            />
        </div>
    )
}

export default Profile;