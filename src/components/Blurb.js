import React from 'react';
import './Blurb.css';

import Socials from './Socials';

import me from '../images/me.jpg';

function Blurb() {
    return(
        <div className="Blurb" >
            <h1 className="sticky" id="about"><strong>Ben Hankin</strong></h1>
            {/*<<h2>Software Engineer</h2>*/}
            <img className="photo" src={me} />
            <p className="about-me">
                Hi there, I am a <strong>software engineer</strong> currently in <strong>Los Angeles, CA</strong>.
            </p>
            <p className="about-me"> This webpage is under construction. </p>
            <Socials />
            <hr />
            <p className="about-me"> <i>To do </i></p>
            <p className="about-me"> add social media icons/links </p>
            <p className="about-me"> add info of previous work and projects + short bio </p>
            <p className="about-me"> circuitry thing: fade animations, absolute positioning </p>
            <p className="about-me"> dark theme </p>
            <p className="about-me"> embed escape velocity? </p>
            <hr />
        </div>
    )
}

export default Blurb;