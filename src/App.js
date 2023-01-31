import React from 'react';
import './App.css';
import Templay from './templay';
import MissedTemplay from './missedTemplay';


function App() {
  return (
    <div className="App">
      {
        <div>
          <header id='header'><h1>For You</h1></header>
          <hr></hr>
          <Templay/>
          <h1>In Case You Missed it</h1>
          <hr></hr>
          <MissedTemplay/>
        </div>
      }
    </div>
  );
}

export default App;