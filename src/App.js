import './App.css';

import ProjectDisplay from './components/ProjectDisplay';
import Navbar from './components/Navbar';
import Blurb from './components/Blurb';
import Border from './components/Border';
import Socials from './components/Socials';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Blurb />
      <ProjectDisplay />
    </div>
  );
}

export default App;
