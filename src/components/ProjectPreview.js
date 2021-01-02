import React from 'react';
import './ProjectPreview.css';

function ProjectPreview(props) {
    return <div className='project-preview'>
                <a href={props.url} target="_blank">
                <div className='basic-info'>
                    <img src={props.image} className='project-image' alt='project logo'/>
                    <div className='project-name'><strong>{props.projectName}</strong></div>
                    <div className='specs'>{props.specs}</div>
                    <div className='specs'><i>{props.technologies}</i></div>
                    {/*<div className='read-more'>+</div>*/}
                </div>
                {/*<div className='more-info'>{props.moreInfo}</div>*/}
                </a></div>;
}

export default ProjectPreview;
