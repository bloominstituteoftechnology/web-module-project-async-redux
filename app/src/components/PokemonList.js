import { connect } from 'react-redux';

const PokemonList = ( props ) => {
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

export default connect(mapStateToProps, {})(PokemonList);