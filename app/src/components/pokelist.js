import { useEffect } from "react";
import { connect } from "react-redux";
import  { fetchInfo } from "../action/action.js";
import PokeCard from './pokecard.js';

const PokeList = (props) => {
  const { fetchInfo } = props;

  useEffect(() => {fetchInfo()}, [fetchInfo]);

  return (
    <div>
      {props.isLoading ? <h2>Loading data...</h2> : null}
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.pokemon.map((pokemon) => {
        return (
          <PokeCard key={pokemon.key} name={pokemon.name} url={pokemon.url}/>
        )
      })}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    pokemon: state.pokemon,
    pokemons: state.pokemons,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchInfo })(PokeList); 