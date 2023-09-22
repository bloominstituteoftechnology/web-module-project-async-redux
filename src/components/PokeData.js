import React from 'react';
import { connect } from 'react-redux';
const PokeData = (props) => {
  const { pokemon } = props;
  // if (!pokemon) {
  //   return null
  // }

  return (
    <div className="pokemon-card">
      <h3>Name: {pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <p>Supertype: {pokemon.supertype}</p>
      <p>Level: {pokemon.level}</p>
      <p>HP: {pokemon.hp}</p>
  
      
      {pokemon.abilities && (
        <div>
          <h4>Abilities:</h4>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>
                <strong>Name:</strong> {ability.name}
                <br />
                <strong>Types:</strong> {ability.types}
                <br />
                <strong>Text:</strong> {ability.text}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      
      {pokemon.attacks && (
        <div>
          <h4>Attacks:</h4>
          <ul>
            {pokemon.attacks.map((attack, index) => (
              <li key={index}>
                <strong>Name:</strong> {attack.name}
                <br />
                <strong>Cost:</strong> {attack.cost.join(", ")}
                <br />
                <strong>Converted Energy Cost:</strong>{" "}
                {attack.convertedEnergyCost}
                <br />
                <strong>Damage:</strong> {attack.damage}
                <br />
                <strong>Text:</strong> {attack.text}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.weaknesses && (
        <div>
          <h4>Weaknesses:</h4>
          <ul>
            {pokemon.weaknesses.map((weakness, index) => (
              <li key={index}>
                <strong>Type:</strong> {weakness.types}
                <br />
                <strong>Value:</strong> {weakness.value}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.resistances && (
        <div>
          <h4>Resistences:</h4>
          <ul>
            {pokemon.resistances.map((resistance, index) => (
              <li key={index}>
                <strong>Type:</strong> {resistance.types}
                <br />
                <strong>Value:</strong> {resistance.value}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      
      {pokemon.retreatCost && (
        <p>Retreat Cost: {pokemon.retreatCost.join(", ")}</p>
      )}

    
      {pokemon.set && (
        <div>
          <h4>Set Details:</h4>
          <p>ID: {pokemon.set.id}</p>
          <p>Name: {pokemon.set.name}</p>
          <p>Series: {pokemon.set.series}</p>
          <p>Release Date: {pokemon.set.releaseDate}</p>
          <img src={pokemon.set.images.symbol} alt="Set Symbol" />
          <img src={pokemon.set.images.logo} alt="Set Logo" />
        </div>
      )}
   
      {pokemon.evolvesFrom && <p>Evolves From: {pokemon.evolvesFrom}</p>}
      {pokemon.rarity && <p>Rarity: {pokemon.rarity}</p>}
      {pokemon.flavorText && <p>Flavor Text: {pokemon.flavorText}</p>}

      {pokemon.nationalPokedexNumbers && (
        <div>
          <h4>National Pokedex Numbers:</h4>
          <ul>
            {pokemon.nationalPokedexNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}

      {pokemon.legalities && (
        <div>
          <h4>Legalities:</h4>
          <p>Unlimited: {pokemon.legalities.unlimited}</p>
        </div>
      )}

      
      {pokemon.tcgplayer && (
        <div>
          <h4>TCGPlayer Data:</h4>
          <p>URL: {pokemon.tcgplayer.url}</p>
          <p>Updated At: {pokemon.tcgplayer.updatedAt}</p>
        </div>
      )}

      
      {pokemon.cardmarket && (
        <div>
          <h4>CardMarket Data:</h4>
          <p>URL: {pokemon.cardmarket.url}</p>
          <p>Updated At: {pokemon.cardmarket.updatedAt}</p>
        </div>
      )}
    </div>
  );
};

const MapStateProps = state => {
  console.log(state.pokemon)
  return {
    pokemon: state.pokemon
    
  }
} 

export default connect(MapStateProps) (PokeData);
