import { connect } from "react-redux";

const PokeGrid = ({ pokemon }) => {
  return (
    <div className="poke-grid">
      {pokemon.map((singlePokemon) => (
        <div className="poke-card">
          <h4 key={singlePokemon.url}>{singlePokemon.name}</h4>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    pokemon: state.pokemon,
  };
};

export default connect(mapStateToProps, {})(PokeGrid);
