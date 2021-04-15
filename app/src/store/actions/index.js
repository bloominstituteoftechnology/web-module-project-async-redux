import axios from 'axios';


export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const fetchData = () => {
    return (dispatch) => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(res => {
                dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
            })
            .catch(err => console.log(err))
    }
}