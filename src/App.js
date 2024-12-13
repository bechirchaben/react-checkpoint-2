import React from 'react';
import './App.css';
import PlayersList from './playerslist.js';
import images from './images/bellingham.webp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Player List</h1>
        <PlayersList />
      </header>
    </div>
  );
}

export default App;
