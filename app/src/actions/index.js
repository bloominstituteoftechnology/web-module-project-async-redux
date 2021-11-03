import axios from 'axios';

export const GET_POKEMON_LOAD = 'GET_POKEMON_LOAD';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAIL = 'GET_POKEMON_FAIL';

export const getPokemon = () => {
    return dispatch => {
        dispatch({type: GET_POKEMON_LOAD});
        axios.get('https://api.pokemontcg.io/v2/cards/').then(res => {
            dispatch({type: GET_POKEMON_SUCCESS, payload: res.data})
        }).catch(err => {
            console.error(err);
            dispatch({type: GET_POKEMON_FAIL, payload: err})
        })
    }
}