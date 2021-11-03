import React from "react";
import { connect } from "react-redux";
import { getPokemon } from "../actions";
import PokemonList from './PokemonList'

const Pokemon = (props) =>{
    const handleClick = () => {
        props.getPokemon()
    }
    return (
        <div>
            <input type='text' placeholder='Search Cards'/>
            <button onClick={handleClick}>Search</button>
            <PokemonList />
        </div>
    )
}

export default connect(null, {getPokemon})(Pokemon);