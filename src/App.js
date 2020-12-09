import './App.css';
import React, {useState} from 'react';

import ProjectDisplay from './components/ProjectDisplay';
import Navbar from './components/Navbar';
import Blurb from './components/Blurb';
import Border from './components/Border';
import Socials from './components/Socials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blurb />
      <Contact />
    </div>
  );
}

export default App;
