import './App.css';
import React from 'react';
import Background from './components/Background.jsx';
import NavBar from './components/NavBar.jsx';
import './styles/NavBarStyle.scss';

function App() {
  return (
    <div style={{ maxWidth: '1200px' }} className="App container ">
    <h2 style={{ position: 'relative', zIndex: '2' }} className="text-center mb-4 pt-4 mt-0">Trinh Gliedt</h2>
      <div style={{ position: 'relative', zIndex: '2' }}>
        <NavBar style={{ position: 'relative', zIndex: '2' }}/>

      </div>
      <Background style={{ position: 'relative', zIndex: '1' }}/>
    </div>
  );
}

export default App;
