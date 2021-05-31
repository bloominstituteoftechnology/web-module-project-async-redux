import axios from 'axios';

export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

export const getCharacter = () => (dispatch) => {
    dispatch({type: FETCH_CHARACTER_START});
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((res) => {
                console.log(res.data.results)
                dispatch({type: FETCH_CHARACTER_SUCCESS, payload: res.data.results})
            })
            .catch(err => {
                dispatch({type: FETCH_CHARACTER_FAILURE, payload: err.response})
            })
}

