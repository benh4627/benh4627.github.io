import React from 'react';
import './Socials.css';

import insta from '../images/instagram.png';
import linked from '../images/linkedin.png';
import github from '../images/github.png';

function Socials() {
    return (
        <div className="socials">
            <a href="https://www.linkedin.com/in/benh4627/"><img src={linked} className="icon" alt="linkedin"/></a>
            <a href="https://www.linkedin.com/in/benh4627/"><img src={github} className="icon" alt="github"/></a>
            <a href="https://www.linkedin.com/in/benh4627/"><img src={insta} className="icon" alt="instagram"/></a>
        </div>
    )
}

export default Socials;