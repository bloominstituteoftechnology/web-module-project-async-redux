import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUrlPokemon, fetchPkmn } from "./store";

import PokeGrid from "./components/PokeGrid";

import logo from "./logo.svg";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import { test } from "./store/actions";

function App({ urlPokemon, isLoading, error, fetchUrlPokemon, fetchPkmn }) {
  useEffect(() => fetchUrlPokemon(151), [fetchUrlPokemon]);

  useEffect(
    () =>
      urlPokemon.forEach((pkmn) => {
        fetchPkmn(pkmn.url);
        console.log(pkmn.url);
      }),
    [urlPokemon, fetchPkmn]
  );

  return (
    <div className="App">
      <h1>YAPA!</h1>
      <h2>Yet Another Poke App</h2>
      <button
        onClick={() => fetchPkmn("https://pokeapi.co/api/v2/pokemon/13/")}
      >
        Test
      </button>
      {isLoading ? (
        <LoadingSpinner />
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
    urlPokemon: state.urlPokemon,
    pokemonList: state.pokemonList,
  };
};

export default connect(mapStateToProps, { fetchUrlPokemon, fetchPkmn })(App);
