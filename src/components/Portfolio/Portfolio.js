import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import spotifollow from './Spotifollow.png';
import escVel from './escapeVelocity.png';
import titanic from './titanicPanic.png';
import aws from './AWS.png';
import auxman from './auxman.png';
import gdc from './pierceGdc.png';

function Portfolio() {
    return(
        <div className="Portfolio">
            <span className="Projects1">
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
                image={aws}
                projectName='Software Engineering Intern'
                specs='Amazon | Summer 2021'
                technologies='Spotify API, React, Node.js'
                moreInfo='More info to be added'
                className='t1'
                url=''
            />
            <ProjectCard 
                image={escVel}
                projectName='Escape Velocity'
                specs='Mobile Game | 2020'
                technologies='Unity API, C#'
                moreInfo='More info to be added'
                className='t1'
                url='https://github.com/benh4627/Escape-Velocity'
            /></span>
            <span className="Projects2"><ProjectCard 
                image={titanic}
                projectName='Titanic Panic'
                specs='WebGL Graphics Game | 2020'
                technologies='Javascript, HTML/CSS, TinyGraphics'
                moreInfo='More info to be added'
                className='t1'
                url='https://github.com/benh4627/CS174A_TitanicPanic'
            />
            <ProjectCard 
                image={gdc}
                projectName='Game Development Club'
                specs='Pierce College | 2019 - 2020'
                moreInfo='More info to be added'
                className='t1'
                url='https://github.com/benh4627/spotifollow'
            />
            <ProjectCard 
                image={auxman}
                projectName='Auxman'
                moreInfo='More info to be added'
                className='t1'
                url='https://github.com/benh4627/spotifollow'
            /></span>
        </div>
    )
}

export default Portfolio;