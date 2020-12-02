import './App.css';
import ProjectPreview from './components/ProjectPreview';
import Navbar from './components/Navbar';
import escVelLogo from './images/escapeVelocity.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProjectPreview 
       image={escVelLogo}
       projectName='Escape Velocity'
       technologies='C#, Unity 3D, Unity API'
      />
    </div>
  );
}

export default App;
