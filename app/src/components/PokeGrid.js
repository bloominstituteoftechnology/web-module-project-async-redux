import { connect } from "react-redux";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemonList }) => {
  return (
    <div className="poke-grid">
      {pokemonList.map((pkmn) => {
        return <PokeCard key={pkmn.id} pkmn={pkmn} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    pokemonList: state.pokemonList,
  };
};

export default connect(mapStateToProps, {})(PokeGrid);
