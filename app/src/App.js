import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUrlPokemon, fetchPkmn } from "./store";

import PokeGrid from "./components/PokeGrid";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";

function App({ urlPokemon, isLoading, error, fetchUrlPokemon, fetchPkmn }) {
  //
  useEffect(() => fetchUrlPokemon(3), [fetchUrlPokemon]);

  useEffect(
    () =>
      urlPokemon.forEach((pkmn) => {
        fetchPkmn(pkmn.url);
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
