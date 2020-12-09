import React, { useState } from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import BH from '../images/BH.png';

function Navbar(props) {
    let menu =  <ul className="menu-animation menu"><strong>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </strong></ul>
    let menuvert
    const [showMenu, setShowMenu] = useState(false);
    if (showMenu) {
        menuvert = <ul className="menu-vert"><strong>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </strong></ul>
    }

    return(
        <div className="Navbar">
            <div className="normal">
            <img className="logo" src={BH} />
            {menu}
            {/*<button type="button" href="#Resume"><strong>Resume</strong></button>*/}
            <div className="burg">
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}/>
            </div>

            </div>
            {menuvert}
        </div>
    )
}

export default Navbar;