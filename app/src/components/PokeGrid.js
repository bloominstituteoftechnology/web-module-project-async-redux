import { useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../helpers/mapStateToProps";
import { fetchUrlPokemon } from "../store/actions";
import Pagination from "./Pagination";
import PokeCard from "./PokeCard";

const PokeGrid = ({ pokemonList, urlPokemon, nextUrlPokemon }) => {
  const nextPokemon = nextUrlPokemon.results.filter((nextPkmn) =>
    pokemonList.find((pkmn) => pkmn.name === nextPkmn.name)
  );

  const preloadImages = async (imgsArray) => {
    debugger;
    const loadPromises = await imgsArray.map((imgSrc) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.alt = imgSrc.name;
        img.src = imgSrc.sprites.other["official-artwork"].front_default;

        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(loadPromises);
  };

  useEffect(() => {
    preloadImages(nextPokemon);
  }, [nextPokemon]);
  /*
  If the img exists, use it 
   */

  return (
    <section className="container">
      <div className="poke-grid">
        {pokemonList.map((pkmn) =>
          urlPokemon.find((urlPkmn) => urlPkmn.name === pkmn.name) ? (
            <PokeCard key={pkmn.id} pkmn={pkmn} />
          ) : null
        )}
        {/* {pokemonList.map((pkmn) =>
          nextUrlPokemon.results.find(
            (urlPkmn) => urlPkmn.name === pkmn.name
          ) ? (
            <PokeCard key={pkmn.id} pkmn={pkmn} />
          ) : null
        )} */}
      </div>
      <Pagination onDisplayCount={urlPokemon.length} />
    </section>
  );
};

const mapState = mapStateToProps("pokemonList", "urlPokemon", "nextUrlPokemon");

export default connect(mapState, { fetchUrlPokemon })(PokeGrid);
