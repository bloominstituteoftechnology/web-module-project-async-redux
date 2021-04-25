import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import { fetchUrlPokemon } from "../store/actions";
import Pagination from "./Pagination";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemonList, urlPokemon, fetchUrlPokemon }) => {
  return (
    <section className="container">
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

export default connect(mapState, { fetchUrlPokemon })(PokeGrid);
