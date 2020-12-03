import React from 'react';
import './Border.css';

import esc from '../images/escapeVelocity.png';

function Border() {
    return(
        <div className="Border">
            <div className="vertical">{esc}</div>
        </div>
    )
}

export default Border;