import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPkmn } from "../store";

const PokeCard = ({ pkmn, fetchPkmn }) => {
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
    urlPokemon: state.urlPokemon,
  };
};

export default connect(mapStateToProps, { fetchPkmn })(PokeCard);
