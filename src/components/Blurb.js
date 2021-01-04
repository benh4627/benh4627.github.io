import React from 'react';
import './Blurb.css';

import Socials from './Socials';

import me2 from '../images/me2.png';

function Blurb() {
    return(
        <div className="Blurb" id="ABOUT">
            {/*<<h2>Software Engineer</h2>*/}
            <img className="photo" src={me2} />
            <p className="about-me">
                Hi there, I am a student studying <strong>Computer Science</strong> at the <strong>University of California, Los Angeles</strong>
            </p>
            <p className="about-me">Get in touch with me at <strong>benhankin@ucla.edu</strong></p>
            <Socials />
            <div className="todo">
            <p className="about-me"> <i>To do </i></p>
            <p className="about-me"> add social media icons/links </p>
            <p className="about-me"> add info of previous work and projects + short bio </p>
            <p className="about-me"> circuitry thing: fade animations, absolute positioning </p>
            <p className="about-me"> dark theme </p>
            <p className="about-me"> embed escape velocity? </p>
        </div>

        <a target="_blank" href="https://drive.google.com/file/d/1XxnXSASXa5c1jnlyiwHAmb1KtZIDDlvs/view?usp=sharing"><button type="button"><strong>Resume</strong></button></a>
        </div>
    )
}

export default Blurb;