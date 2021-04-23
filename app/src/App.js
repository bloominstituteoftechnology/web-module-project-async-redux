import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPokemon, fetchPkmn } from "./store";

import PokeGrid from "./components/PokeGrid";

import logo from "./logo.svg";
import "./App.css";

function App({ pokemon, isLoading, error, fetchPokemon, fetchPkmn }) {
  useEffect(() => {
    fetchPokemon();
    // .then(() => pokemon.forEach((pkmn) => fetchPkmn(pkmn.url)))
    // .catch(() => {});
  }, [fetchPokemon]);

  return (
    <div className="App">
      <h1>YAPA!</h1>
      <h2>Yet Another Poke App</h2>
      <button onClick={() => fetchPkmn("https://pokeapi.co/api/v2/pokemon/1/")}>
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
    pokemon: state.pokemon,
    pkmnList: state.pkmnList,
  };
};

export default connect(mapStateToProps, { fetchPokemon, fetchPkmn })(App);
