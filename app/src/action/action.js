import axios from 'axios';

export const FETCH_POKEMONS_BEGIN = "FETCH_POKEMONS_BEGIN";
export const FETCH_POKEMONS_SUCCESS = "FETCH_POKEMONS_SUCCESS";
export const FETCH_POKEMONS_FAIL = "FETCH_POKEMONS_FAIL";

export const fetchInfo = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_POKEMONS_BEGIN });
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${Math.floor(Math.random() * Math.floor(1000))}`)
            .then((res) => {
                console.log(res.data.results);
                dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: res.data.results});
            })
            .catch((err) => {
                dispatch({ type: FETCH_POKEMONS_FAIL, payload: err.message });
            });
    };
};

