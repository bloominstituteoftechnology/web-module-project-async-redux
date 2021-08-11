import React from 'react'
import Food from './components/Food'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>random food ideas</h1>
        <h3>Don't know what to have for dinner tonight? Select the button below to get a random idea</h3>
      </header>
      <Food />
    </div>
  );
}

export default App;
