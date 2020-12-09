import './App.css';
import React, {useState} from 'react';

import Navbar from './components/Navbar';
import Blurb from './components/Blurb';
import Border from './components/Border';
import Contact from './components/Contact';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blurb />
      <Work />
      <Contact />
      
    </div>
  );
}

export default App;
