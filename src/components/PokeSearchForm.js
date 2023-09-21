import React from 'react';
import testPokemonData from './PokemonData';
import PokeData from './PokeData';

function PokeSearchForm() {
  // Map over the testPokemonData array and render a PokeData component for each Pokémon
  const renderedPokemon = testPokemonData.map((pokemon, index) => (
    <PokeData key={index} pokemon={pokemon} />
  ));

  return (
    <div>
      <form>
        <input />
        <button className='initialButton'> Search </button>
      </form>
      {renderedPokemon}
    </div>
  );
}

export default PokeSearchForm;