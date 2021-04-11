import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    window.location.href = "https://apps.shirommakkad.com";
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Shirom Makkad</p>
      </header>
    </div>
  );
}

export default App;
