import React from "react";
import { connect } from "react-redux";

const PokemonList = (props) => {
    return(
        <div>
            {props.pokedex.filter}
        </div>
    )
}
const mapStateToProps = (state) => {
    return({
        pokedex: state.pokedex
    })
}

export default connect(mapStateToProps)(PokemonList);