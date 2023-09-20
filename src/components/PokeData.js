// PokemonCard.js

import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3>Name: {pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <p>Supertype: {pokemon.supertype}</p>
      <p>Level: {pokemon.level}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Type: {pokemon.types.join(', ')}</p>
      {/* Add more information */}
      <img src={pokemon.images.small} alt={pokemon.name} />
    </div>
  );
};

export default PokemonCard;
