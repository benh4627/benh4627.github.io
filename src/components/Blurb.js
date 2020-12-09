import React from 'react';
import './Blurb.css';

import me from '../images/me.jpg';

function Blurb() {
    return(
        <div className="Blurb" id="about">
            <h1 className="sticky"><strong>Ben Hankin</strong></h1>
            <hr/>
            {/*<<h2>Software Engineer</h2>*/}
            <img className="photo" src={me}/>
            <p className="about-me">
                Hi there, I am a <strong>software engineer</strong> currently in <strong>Los Angeles, CA</strong>.
            </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
            <p className="about-me"> This webpage is under construction. </p>
        </div>
    )
}

export default Blurb;