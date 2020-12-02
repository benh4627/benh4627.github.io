import './App.css';

import ProjectDisplay from './components/ProjectDisplay';
import Navbar from './components/Navbar';
import Blurb from './components/Blurb';


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
