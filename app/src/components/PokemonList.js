import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../actions';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-size: 4em;
    text-align: center;
    color: gold;
    text-shadow: 2px 2px blue;
`
const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledH4 = styled.h4`
    margin: 2em;
`

const BackgroundDiv = styled.div`
    background-color: coral;
    margin: 3em;
`

const PokemonList = props => {

    useEffect(() => {
        props.getPokemon();
    }, []);


  return (
      
    <>
    <BackgroundDiv>
      <StyledH2>Pokedex</StyledH2>
      {props.isFetching && <p>Fetching your Pokémon</p>}
      <StyledDiv>
        {props.pokemon.map(pokemon => (
          <StyledH4 key={pokemon.url}>{pokemon.name}</StyledH4>
        ))}
      </StyledDiv>
      {props.error && <p className="error">{props.error}</p>}
      </BackgroundDiv>
    </>
    
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getPokemon }
)(PokemonList);