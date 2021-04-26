import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchUrlPokemon, fetchPkmn } from "./store";
import { mapStateToProps } from "./helpers/mapStateToProps";
//\/\/\/\/\/\/\/\/\/\ Components /\/\/\/\/\/\/\/\/\/\\
import PokeGrid from "./components/PokeGrid";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import { setKeyDown } from "./store";

function App({
  urlPokemon,
  isLoading,
  error,
  fetchUrlPokemon,
  fetchPkmn,
  setKeyDown,
}) {
  //\/\/\/\/\/\/\/\/\/\ HOOKS  /\/\/\/\/\/\/\/\/\/\\

  const appRef = useRef(null);

  //\/\/\/\/\/\/\/\/\/\ EFFECTS /\/\/\/\/\/\/\/\/\/\\

  useEffect(
    () => fetchUrlPokemon(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=3`),
    [fetchUrlPokemon]
  );

  useEffect(
    () =>
      urlPokemon.forEach((pkmn) => {
        fetchPkmn(pkmn.url);
      }),
    [urlPokemon, fetchPkmn]
  );

  useEffect(() => appRef.current.focus(), []);

  //\/\/\/\/\/\/\/\/\/\ HELPERS /\/\/\/\/\/\/\/\/\/\\

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === "ArrowLeft" || key === "ArrowRight") {
      e.preventDefault();
      setKeyDown(e.key);
    }
  };

  //\/\/\/\/\/\/\/\/\/\ RENDER /\/\/\/\/\/\/\/\/\/\\

  return (
    <div
      autofocus
      tabIndex="-1"
      ref={appRef}
      onKeyDown={handleKeyDown}
      className="App"
    >
      <h1>YAPA!</h1>
      <h2>Yet Another Poke App</h2>
      <button
        onClick={() =>
          fetchUrlPokemon(
            `https://pokeapi.co/api/v2/pokemon?offset=750&limit=3`
          )
        }
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
        <>
          <PokeGrid />
        </>
      )}
    </div>
  );
}

const mapState = mapStateToProps(
  "isLoading",
  "error",
  "urlPokemon",
  "pokemonList"
);

export default connect(mapState, { fetchUrlPokemon, fetchPkmn, setKeyDown })(
  App
);
