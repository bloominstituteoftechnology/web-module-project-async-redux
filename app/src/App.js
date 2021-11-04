import React from 'react';
import giphyLogo from './giphy.svg';
import Giphy from './components/giphy';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={giphyLogo} className="App-logo" alt="logo" />
      </header>
        <div>
          <h1>Wanna have some fun?</h1>
        </div>
        <Giphy/>
        <div>
          <span>Go to </span>

          <a
            className="App-link"
            href="https://giphy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GIPHY
          </a>
          <span>. </span>
          
          
          
        </div>
      
      
    </div>
  );
}

export default App;
