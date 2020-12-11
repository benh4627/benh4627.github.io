import React from 'react';
import './Project.css';

import ucla from '../images/Ucla.png';
import acm from '../images/Acm.png';
import Resume from '../Resume_BenHankin.pdf';

function Project() {
    return(
        <div className="project">
                  <embed src={Resume} type="application/pdf" width="100%" height="600px" />
       
        </div>
    )
}

export default Project;