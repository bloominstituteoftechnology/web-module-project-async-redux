import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
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

const mapState = mapStateToProps("pokemonList");

export default connect(mapState, {})(PokeGrid);
