import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return(
        <span className="Navbar">
            <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </span>
    )
}

export default Navbar;