import React from 'react';
import './ProjectDisplay.css';
import ProjectPreview from './ProjectPreview.js'

import escVelLogo from '../images/escapeVelocity.png';
import acmUcla from '../images/acmUcla.png';
import dailyBruin from '../images/dailyBruin.png';
import pierceGdc from '../images/pierceGdc.png';
import titanicPanic from '../images/titanicPanic.png';
import auxman from '../images/auxman.png';

function ProjectDisplay() {
    return (
    <div className="project-display" id="PORTFOLIO">
      <ProjectPreview 
        image={escVelLogo}
        projectName='Escape Velocity'
        specs='Mobile game | Feb. 2020'
        technologies='C#, Unity 3D, Unity API'
        moreInfo='More info to be added'
        className='t1'
        url='https://github.com/benh4627/Escape-Velocity'
      />
      <ProjectPreview
        image={acmUcla}
        projectName='Dev Team Intern'
        specs='ACM @ UCLA | Nov. 2020 - present'
        technologies='React, HTML/CSS, JavaScript'
        moreInfo='More info to be added'
        className='t2'
        url='https://acm.cs.ucla.edu/'
      />
      <ProjectPreview
        image={dailyBruin}
        projectName='Software Engineering Intern'
        specs='Daily Bruin | Oct. 2020 - present'
        technologies='React, HTML/CSS, Javascript, Git'
        moreInfo='More info to be added'
        className='t3'
        url='https://dailybruin.com/'
      />
      <ProjectPreview
        image={pierceGdc}
        projectName='Game Dev Club President'
        specs='Pierce College | Feb. 2019 - Mar. 2020'
        technologies='Presentations, Tutorials, Hackathons'
        moreInfo='More info to be added'
        className='t3'
      />
      <ProjectPreview
        image={titanicPanic}
        projectName='Titanic Panic'
        specs='Desktop Game | Oct. 2020 - Dec. 2020'
        technologies='Javascript, Tiny Graphics'
        moreInfo='More info to be added'
        className='t3'
        url='https://github.com/benh4627/CS174A_TitanicPanic'
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