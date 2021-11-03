import React from 'react';
import PokemonList from './components/PokemonList';
import styled from 'styled-components';
import pokemonLogo from './imgs/pokemonLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pokemonLogo} className="App-logo" alt="logo" />
      </header>
      <PokemonList />
    </div>
  );
}


export default App;