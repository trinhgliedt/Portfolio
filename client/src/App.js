import './App.css';
import React from 'react';
import Background from './components/Background.jsx';
import NavBar from './components/NavBar.jsx';
import Projects from './views/Projects.jsx';
import Resume from './views/Resume.jsx';

import { Router } from "@reach/router";

function App() {
  return (
    <div style={{ maxWidth: '1200px' }} className="App" class="container">
    <h2 style={{ position: 'relative', zIndex: '2' }} className="text-center mb-4 pt-4 mt-0">Trinh Gliedt</h2>
      <NavBar />
      <Background/>
      
      <Router style={{ position: 'relative', zIndex: '2' }}>
        {/* <Redirect from="/" to="/projects" noThrow = "true" /> */}
        <Projects path="/projects" />
        <Resume path="/resume" />
      </Router>
    </div>
  );
}

export default App;
