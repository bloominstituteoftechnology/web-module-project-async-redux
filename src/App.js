import React from 'react';
import Jokes from './components/Jokes'
import './App.css';

function App() {
  return (
    <div className="App patterns pt1">
      {/* Async Redux Project */}
      <h1>Feelin' Blue?? </h1>
      <h2>Here's a joke!</h2>
      <Jokes />
    </div>
  );
}

export default App;
