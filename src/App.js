import './App.css';

import ProjectDisplay from './components/ProjectDisplay';
import Navbar from './components/Navbar';
import Blurb from './components/Blurb';
import Border from './components/Border';
import Socials from './components/Socials';


//IDEA: Make escape velocity playable on site
//yellow buttons on hover
//hover on logo something happens

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blurb />
    </div>
  );
}

export default App;
