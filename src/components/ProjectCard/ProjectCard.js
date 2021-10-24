import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    return <div className='project-card'>
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

export default ProjectCard;
