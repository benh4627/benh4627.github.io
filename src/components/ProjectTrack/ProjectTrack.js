import React from 'react';
import './ProjectTrack.css';

import auxman from './auxman.png'


function ProjectTrack(props) {
    return(
        <div className="ProjectTrack">
            <div className="left-align"> {props.num} <img className="track-img" src={props.img} /> <strong>{props.name}</strong>
             <div className="desc">{props.desc}</div></div>
            <div className="project-link"><a href={props.link}><p>{props.linkdesc}</p></a></div>
        </div>
    )
}


export default ProjectTrack;