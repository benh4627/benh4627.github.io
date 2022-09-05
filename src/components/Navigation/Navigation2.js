import React, { useState } from 'react';
import './Navigation2.css';

import BH from './BH.png';

import spotify from './spotify.png';
import insta from './instagram.png';
import linkin from './linkedin.png';
import git from './github.png';

function Navigation(props) {
    let menu =  <ul className="menu-animation menu"><strong>
    <li><a className="github" href="https://github.com/benh4627">GITHUB</a></li>
    <li><a className="linkedin" href="https://www.linkedin.com/in/benhankin/">LINKEDIN</a></li>
    <li><a className="spotifynav" href="https://open.spotify.com/user/0zijsn5i6r0vr9axmxt94xjej">SPOTIFY</a></li>
                </strong></ul>
    let menuvert
    const [showMenu, setShowMenu] = useState(false);
    if (showMenu) {
        menuvert = <ul className="menu-vert"><strong>
        <li><a className="github" href="https://github.com/benh4627">GITHUB</a></li>
        <li><a className="linkedin" href="https://www.linkedin.com/in/benhankin/">LINKEDIN</a></li>
        <li><a className="spotifynav" href="https://open.spotify.com/user/0zijsn5i6r0vr9axmxt94xjej">SPOTIFY</a></li>
    </strong></ul>
    }

    return(
        <div className="Navigation2">
        <img className="logo" src={BH} />
            <ul className="spotify-menu"><strong>
                <li><img src={git}/><a className="github" href="https://github.com/benh4627">GITHUB</a></li>
                <li><img src={linkin}/><a className="linkedin" href="https://www.linkedin.com/in/benhankin/">LINKEDIN</a></li>
                </strong></ul>
                <hr />
        </div>
    )
}

export default Navigation;