import React, { useState } from 'react';
import './Navigation.css';

import BH from './BH.png';

function Navigation(props) {
    let menu =  <ul className="menu-animation menu"><strong>
    <li><a className="github" href="https://github.com/benh4627">GITHUB</a></li>
    <li><a className="linkedin" href="https://www.linkedin.com/in/benhankin/">LINKEDIN</a></li>
    <li><a className="spotify" href="https://open.spotify.com/user/0zijsn5i6r0vr9axmxt94xjej">SPOTIFY</a></li>
                </strong></ul>
    let menuvert
    const [showMenu, setShowMenu] = useState(false);
    if (showMenu) {
        menuvert = <ul className="menu-vert"><strong>
        <li><a className="github" href="https://github.com/benh4627">GITHUB</a></li>
        <li><a className="linkedin" href="https://www.linkedin.com/in/benhankin/">LINKEDIN</a></li>
        <li><a className="spotify" href="https://open.spotify.com/user/0zijsn5i6r0vr9axmxt94xjej">SPOTIFY</a></li>
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