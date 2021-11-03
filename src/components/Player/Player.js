import React from 'react';
import './Player.css';

import ucla from '../Profile/Ucla.png';

function Player() {
    return(
        <div className="Player">
            <div className="the-middle">
                <div className="Play"> ▶ </div>
                <div className="progress-component">
                <p>2020</p> <div className="Progress"></div> <p>2023</p>
                </div>
            </div>
           {/*} <img className="nowPlayingPic" src={ucla} />*/}
        </div>
    )
}

export default Player;