import React, { useState } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
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
      <button onClick={() => {}}>Do Nothing</button>
    </div>
  );
};

const mapState = mapStateToProps("urlPokemon");

export default connect(mapState, {})(PokeCard);
