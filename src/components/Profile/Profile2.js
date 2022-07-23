import React from 'react';
import './Profile2.css';

import me from './rainer.jpg';
import check from './check.png';
import snowlake from './snowlake.jpg';
import ben from './ben.png';

import ProjectTrack from '../ProjectTrack/ProjectTrack';

import esc from './escapeVelocity.png';
import aws from './AWS.jpg';
import spotfoll from './Spotifollow.png';
import ucla from './Ucla.png';
import acm from './Acm.png';
import pierce from './pierce.jpg';
import auxman from './auxman.png';
import zoomprime from './prime.png';
import transfer from './tr.png';
import titanic from './rocks.png';

import kingscanyon from './kingscanyon.png';


function Profile() {
    return(
        <div className="ProfileFinal">
            <div className="Profile2">
                <div className="verified">
                </div>
                <h4>Ben Hankin</h4>
                  </div>
                   <div className="Profile3">
                  Hey there, my name is <b>Ben Hankin</b> and I am a <b>software engineer</b>. <br/><br />To view my portfolio, check out my Github. If you'd like to get in contact with me, please message me through LinkedIn or send me an email at <b>benhankin@ucla.edu</b>. 
                  In the meantime, here's a playlist of some songs I'm digging lately. And a picture of me at Kings Canyon National Park, which I am nostalgic for at the time of writing this.<br /><br />
                  <iframe  src="https://open.spotify.com/embed/playlist/5YVvVZQoLv6Jz5G4a4L0OO?utm_source=generator&theme=0" width="28%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                  <img className="kg" src={kingscanyon} height="300" />
                  
                  {/*<h2>Popular</h2>
                
                <div className="green-test">
                <ProjectTrack 
                    num='1'
                    name="UCLA"
                    img={ucla}
                    desc='Computer Science major and Music Industry minor'
                    link="https://benh4627.github.io"
                    linkdesc="Est. June 2023"
                /></div>
                <ProjectTrack 
                    num='2'
                    name="Amazon"
                    img={aws}
                    desc='Software Development Engineering Intern, system design and Java'
                    link="https://benh4627.github.io"
                    linkdesc="May - Aug. 2021"
                />
                <ProjectTrack 
                    num='3'
                    name="Spotifollow"
                    img={spotfoll}
                    desc='Web application using the Spotify API, developed with React, JavaScript, HTML/CSS'
                    link="https://github.com/benh4627/spotifollow"
                    linkdesc="View on Github"
                />
                <ProjectTrack 
                    num='4'
                    name="ACM @ UCLA"
                    img={acm}
                    desc='Board member and Development Team officer'
                    link="https://www.uclaacm.com/"
                    linkdesc="View ACM Website"
                />
                <ProjectTrack 
                    num='5'
                    name="Escape Velocity"
                    img={esc}
                    desc='Mobile game developed with Unity 3D, C#'
                    link="https://github.com/benh4627/Escape-Velocity"
                    linkdesc="View on Github"
                />
                <div className="about">
                <h2>About</h2>
                <div className="img-text">
                <img className="about-img" src={ben} />
                </div>
                </div>
                <ProjectTrack 
                    num='6'
                    name="Los Angeles Pierce College"
                    img={pierce}
                    desc='A.S. in Mathematics, A.S. in Physics, Presidential Honor'
                    link="https://benh4627.github.io"
                    linkdesc="Aug. 2018 - June 2020"
                />
                <ProjectTrack 
                    num='7'
                    name="Auxman"
                    img={auxman}
                    desc='JUCE API Application for songwriters without keyboards'
                    link="https://benh4627.github.io"
                    linkdesc="In Development"
                />
                <ProjectTrack 
                    num='8'
                    name="Self-Driving Robot Car"
                    img={zoomprime}
                    desc='Zoom Prime team in HACK @ Transfer Bridge'
                    link="https://sites.google.com/g.ucla.edu/2020-hack-at-transfer-bridge/home"
                    linkdesc="View on Hack Website"
                />
                <ProjectTrack 
                    num='9'
                    name="Transfer.ify"
                    img={transfer}
                    desc='Tool for UCLA engineering transfers to connect'
                    link="https://github.com/benh4627/transferify"
                    linkdesc="View on Github"
                />
                <ProjectTrack 
                    num='10'
                    name="Titanic Panic"
                    img={titanic}
                    desc='WebGL Graphics Game'
                    link="https://github.com/benh4627/transferify"
                    linkdesc="View on Github"
                />
   */} </div>
        </div>
    )
}

export default Profile;