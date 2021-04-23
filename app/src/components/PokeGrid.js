import { connect } from "react-redux";
import { fetchPkmn } from "../store";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemon, fetchPkmn }) => {
  return (
    <div className="poke-grid">
      {pokemon.map((pkmn) => {
        return <PokeCard key={pkmn.url} pkmn={pkmn} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    pokemon: state.pokemon,
  };
};

export default connect(mapStateToProps, { fetchPkmn })(PokeGrid);
