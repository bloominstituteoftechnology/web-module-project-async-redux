import React from "react";
import Joke from "./components/Joke"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Get a Joke: </h1>
      <Joke />
      </header>
    </div>
  );
}

export default App;
