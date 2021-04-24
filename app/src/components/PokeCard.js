import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchPkmn } from "../store";
import LoadingSpinner from "./LoadingSpinner";

const PokeCard = ({ pkmn, fetchPkmn }) => {
  const [isLoading, setIsLoading] = useState(true);

  const sprite = pkmn.sprites.other["official-artwork"].front_default;

  return (
    <div className="poke-card">
      <img
        src={sprite}
        hidden={isLoading}
        onLoad={() => setIsLoading(false)}
        onError={() => {}}
        alt={pkmn.name}
      />
      <LoadingSpinner hidden={!isLoading} />
      <h4>{pkmn.name}</h4>
      <button onClick={() => setIsLoading}>Get data</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    urlPokemon: state.urlPokemon,
  };
};

export default connect(mapStateToProps, { fetchPkmn })(PokeCard);
