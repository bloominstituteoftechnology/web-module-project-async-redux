import axios from 'axios';


export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const fetchData = () => {
    return (dispatch) => {
        axios
        // Pokemon API //
        // 'https://pokeapi.co/api/v2/pokemon/?limit=151' //
            .get('https://www.dnd5eapi.co/api/spells')
            .then(res => {
                dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
                console.log(res)
            })
            .catch(err => console.log(err))
    }
}