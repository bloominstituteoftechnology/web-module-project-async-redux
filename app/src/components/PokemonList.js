import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../actions';

const PokemonList = props => {

    useEffect(() => {
        props.getPokemon();
    }, []);

  const generatePokemon = e => {
    props.getPokemon();
  };

  return (
    <>
      <h2>Who's That Pokemon?!</h2>
      {props.isFetching && <p>Fetching your Pokémon</p>}
      <div>
        {props.pokemon.map(pokemon => (
          <h4 key={pokemon.url}>{pokemon.name}</h4>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={generatePokemon}>New Pokemon!</button>
    </>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getPokemon }
)(PokemonList);