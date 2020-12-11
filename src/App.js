import './App.css';
import React, {useState} from 'react';

import Navbar from './components/Navbar';
import Blurb from './components/Blurb';
import Border from './components/Border';
import Contact from './components/Contact';
import Work from './components/Work';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blurb />
    </div>
  );
}

export default App;
