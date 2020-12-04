import React from 'react';
import './Navbar.css';

import BH from '../images/BH.png';

function Navbar(props) {
    return(
        <div className="Navbar">
            <img className="logo" src={BH} />
            {/*<button type="button" href="#Resume"><strong>Resume</strong></button>*/}

            <ul><strong>
                <li><a href="#About">About</a></li>
                <li><a href="#Work">Work</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </strong></ul>
        </div>
    )
}

export default Navbar;