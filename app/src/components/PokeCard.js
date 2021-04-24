import React, { useState } from "react";
import { connect } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

const PokeCard = ({ pkmn }) => {
  const [isLoading, setIsLoading] = useState(true);

  const sprite = pkmn.sprites.other["official-artwork"].front_default;

  return (
    <div className="poke-card">
      <img
        src={sprite}
        hidden={isLoading}
        onLoad={() => setIsLoading(false)}
        // Handle image errors
        onError={() => {}}
        alt={pkmn.name}
      />
      <LoadingSpinner hidden={!isLoading} />
      <h4>{pkmn.name}</h4>
      <button onClick={() => {}}>Get data</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    urlPokemon: state.urlPokemon,
  };
};

export default connect(mapStateToProps, {})(PokeCard);
