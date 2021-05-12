import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store';
// Initial //
const PokemonList = ( props ) => {

    useEffect(() => {
        props.fetchData();
    }, [])

    return (
        <div className='pokemon-wrapper'>
            {props.pokemon.map(poke => {
                return (
                    <p key={poke.name}>{poke.name}</p>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {  fetchData })(PokemonList);