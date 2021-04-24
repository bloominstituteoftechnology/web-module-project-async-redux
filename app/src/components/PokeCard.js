import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPkmn } from "../store";

const PokeCard = ({ pkmn, fetchPkmn }) => {
  // useEffect(() => {
  //   console.log("effecting", pkmn.url);
  //   fetchPkmn(pkmn.url);
  // }, [pkmn, fetchPkmn]);

  return (
    <div className="poke-card">
      <h4>{pkmn.name}</h4>
      <button onClick={() => fetchPkmn(pkmn.url)}>Get data</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    pokemonURLs: state.pokemonURLs,
  };
};

export default connect(mapStateToProps, { fetchPkmn })(PokeCard);
