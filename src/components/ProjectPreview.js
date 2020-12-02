import React from 'react';
import './ProjectPreview.css';

function ProjectPreview(props) {
    return <div className='project-preview'>
        <img src={props.image} alt='escape velocity game logo'/>
        <div className='basic-info'>
            <div className='read-more'>+</div>
            <div className='project-name'><strong>{props.projectName}</strong></div>
            <div className='technologies'><i>{props.technologies}</i></div>
        </div>
    </div>;
}

export default ProjectPreview;
