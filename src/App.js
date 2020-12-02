import './App.css';

import ProjectPreview from './components/ProjectPreview';
import Navbar from './components/Navbar';
import Blurb from './components/Blurb';

import escVelLogo from './images/escapeVelocity.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blurb />
      <ProjectPreview 
       image={escVelLogo}
       projectName='Escape Velocity'
       technologies='C#, Unity 3D, Unity API'
      />
    </div>
  );
}

export default App;
