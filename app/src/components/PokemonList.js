import React from "react";
import { connect } from "react-redux";

const PokemonList = (props) => {
    
    return(
        <div className='card-cont'>
            {props.pokedex.data.map(item => {
                return <img src={item.images.small} alt={item.name} key={item.id}/>
            })}
        </div>
    )
}
const mapStateToProps = (state) => ({
        pokedex: state.pokedex
})

export default connect(mapStateToProps)(PokemonList);