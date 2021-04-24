import { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemonURLs, fetchPkmn } from "./store";

import PokeGrid from "./components/PokeGrid";

import logo from "./logo.svg";
import "./App.css";

function App({ pokemonURLs, isLoading, error, fetchPokemonURLs, fetchPkmn }) {
  useEffect(() => fetchPokemonURLs(), [fetchPokemonURLs]);

  useEffect(
    () =>
      pokemonURLs.forEach((pkmn) => {
        fetchPkmn(pkmn.url);
        console.log(pkmn.url);
      }),
    [pokemonURLs, fetchPkmn]
  );

  return (
    <div className="App">
      <h1>YAPA!</h1>
      <h2>Yet Another Poke App</h2>
      <button
        onClick={() => fetchPkmn("https://pokeapi.co/api/v2/pokemonURLs/1/")}
      >
        Test
      </button>
      {isLoading ? (
        <div className="loading-animation">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>L O A D I N G</h3>
        </div>
      ) : error ? (
        <div className="error-box">
          <h3>{error}</h3>
        </div>
      ) : (
        <PokeGrid />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoading: state.isLoading,
    error: state.error,
    pokemonURLs: state.pokemonURLs,
    pkmnList: state.pkmnList,
  };
};

export default connect(mapStateToProps, { fetchPokemonURLs, fetchPkmn })(App);
