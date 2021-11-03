import React from 'react';
import { connect } from 'react-redux';
import {getPoke} from '../actions';
import styled from 'styled-components';

const PokemonList = props => {

  const pullPoke = e => {
    e.preventDefault();
    props.getPoke();
  };

  return (
    <div>
    <h1>Poke Puller</h1>
    <div>
      {props.pokemon.map(pokemon => (
        <h3 key={pokemon.url}>{pokemon.name}</h3>
      ))}
    </div>
    {props.error && <p className="error">{props.error}</p>}
    <Button onClick={pullPoke}>Show Pokemon List</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  error: state.error
});

const Button = styled.button`
display:flex;
align-content:center;
`


export default connect(mapStateToProps, {getPoke})(PokemonList); 