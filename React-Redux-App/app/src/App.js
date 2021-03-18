
import './App.css';
import React from 'react';

import AnimeList from "./components/anime"

class App extends React.Component {



  render(){
    return (
      <div className="App">
        <h1>MAL DBZ search</h1>
        <AnimeList />
      </div>
    );
  }
}

export default App;
