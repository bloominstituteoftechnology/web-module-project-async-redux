import { connect } from "react-redux";
import { fetchPkmn } from "../store";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemonURLs, fetchPkmn }) => {
  return (
    <div className="poke-grid">
      {pokemonURLs.map((pkmn) => {
        return <PokeCard key={pkmn.url} pkmn={pkmn} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    pokemonURLs: state.pokemonURLs,
  };
};

export default connect(mapStateToProps, { fetchPkmn })(PokeGrid);
