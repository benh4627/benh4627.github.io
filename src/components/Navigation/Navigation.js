import React, { useState } from 'react';
import './Navigation.css';

import BH from './BH.png';

function Navigation(props) {
    let menu =  <ul className="menu-animation menu"><strong>
                    <li><a href="#ABOUT">About</a></li>
                    <li><a href="#PORTFOLIO">Portfolio</a></li>
                </strong></ul>
    let menuvert
    const [showMenu, setShowMenu] = useState(false);
    if (showMenu) {
        menuvert = <ul className="menu-vert"><strong>
        <li><a href="#ABOUT">About</a></li>
        <li><a href="#PORTFOLIO">Portfolio</a></li>
    </strong></ul>
    }

    return(
        <div className="Navigation">
            <div className="normal">
            <img className="logo" src={BH} />
            {menu}
            {/*<button type="button" href="#Resume"><strong>Resume</strong></button>*/}
            <div className="burg">
                <p onClick={() => setShowMenu(!showMenu)}>H</p>
            </div>

            </div>
            {menuvert}
        </div>
    )
}

export default Navigation;