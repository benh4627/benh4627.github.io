import React from 'react';
import './ProjectDisplay.css';
import ProjectPreview from './ProjectPreview.js'

import escVelLogo from '../images/escapeVelocity.png';
import acmUcla from '../images/acmUcla.png';
import dailyBruin from '../images/dailyBruin.png';
import auxman from '../images/auxman.png';

function ProjectDisplay() {
    return (
    <div className="project-display">
      <ProjectPreview 
        image={escVelLogo}
        projectName='Escape Velocity'
        specs='Mobile game | Feb. 2020'
        technologies='C#, Unity 3D, Unity API'
        moreInfo='More info to be added'
        className='t1'
      />
      <ProjectPreview
        image={acmUcla}
        projectName='Dev Team Intern'
        specs='ACM @ UCLA | Nov. 2020 - present'
        technologies='React, HTML/CSS, JavaScript'
        moreInfo='More info to be added'
        className='t2'
      />
      <ProjectPreview
        image={dailyBruin}
        projectName='Software Engineering Intern'
        specs='Daily Bruin | Oct. 2020 - present'
        technologies='React, HTML/CSS, Javascript, Git'
        moreInfo='More info to be added'
        className='t3'
      />{/*
      <ProjectPreview
        image={auxman}
        projectName='Auxman'
        specs='TBD'
        technologies='C++'
        moreInfo='blah resurrected'
        className='t4'
      />*/}
      </div>
    )
}

export default ProjectDisplay;