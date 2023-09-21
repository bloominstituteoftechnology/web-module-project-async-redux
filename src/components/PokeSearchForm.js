import React from 'react';
import PokeData from './PokeData';
import { connect } from 'react-redux';

function PokeSearchForm(props) {
  const { pokemonList } = props;

  return (
    <div>
      <form>
        <input />
        <button className='initialButton'>Search</button>
      </form>
      {pokemonList && pokemonList.map((pokemon, index) => (
        <PokeData key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pokemonList: state.pokemon,
  };
};

export default connect(mapStateToProps)(PokeSearchForm);
