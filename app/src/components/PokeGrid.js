import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemonList, urlPokemon }) => {
  return (
    <div className="poke-grid">
      {pokemonList.map((pkmn) =>
        urlPokemon.find((urlPkmn) => urlPkmn.name === pkmn.name) ? (
          <PokeCard key={pkmn.id} pkmn={pkmn} />
        ) : null
      )}
    </div>
  );
};

const mapState = mapStateToProps("pokemonList", "urlPokemon");

export default connect(mapState, {})(PokeGrid);
