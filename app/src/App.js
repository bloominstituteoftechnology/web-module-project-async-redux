import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./store";

import logo from "./logo.svg";
import "./App.css";

function App({ pokemon, isLoading, error, fetchData }) {
  useEffect(() => fetchData(), []);

  return (
    <div className="App">
      <h1>YAPA!</h1>
      <h2>Yet Another Poke App</h2>
      {isLoading ? (
        <div className="loading-animation">
          <img src={logo} className="App-logo" alt="logo" />
          <p>L O A D I N G</p>
        </div>
      ) : null}
      <div className="poke-grid">
        {pokemon.map((singlePokemon) => (
          <div className="poke-card">
            <h4 key={singlePokemon.url}>{singlePokemon.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
