import React from 'react';
import './Work.css';

import ProjectPreview from './ProjectPreview';

import acmUcla from '../images/acmUcla.png';
import dailyBruin from '../images/dailyBruin.png';

function Work() {
    return(
        <div className="work">
            <ProjectPreview
                image={acmUcla}
                projectName='Dev Team Intern'
                specs='ACM @ UCLA | Nov. 2020 - present'
                technologies='React, HTML/CSS, JavaScript'
                moreInfo='blah blah blah: the sequelblah blah blah: the sequelblah blah blah: the sequelblah blah blah: the sequelblah blah blah: the sequel'
                className='old-work'
            />
            <ProjectPreview
                image={dailyBruin}
                projectName='Software Engineering Intern'
                specs='Daily Bruin | Oct. 2020 - present'
                technologies='React, HTML/CSS, Javascript, Git'
                moreInfo='blah blah blah epilogue'
                className='old-work'
            />
        </div>
    )
}

export default Work;