import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import Pagination from "./Pagination";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemonList, urlPokemon }) => {
  const handleKeyDown = (e) => {
    // e.preventDefault();
  };

  return (
    <section className="container" onKeyDown={handleKeyDown}>
      <div className="poke-grid">
        {pokemonList.map((pkmn) =>
          urlPokemon.find((urlPkmn) => urlPkmn.name === pkmn.name) ? (
            <PokeCard key={pkmn.id} pkmn={pkmn} />
          ) : null
        )}
      </div>
      <Pagination onDisplayCount={urlPokemon.length} />
    </section>
  );
};

const mapState = mapStateToProps("pokemonList", "urlPokemon");

export default connect(mapState, {})(PokeGrid);
