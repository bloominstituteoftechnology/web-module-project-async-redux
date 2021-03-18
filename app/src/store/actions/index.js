import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CHARACTERS_START});

        axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then((res) => {
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            console.log(err.message);
            dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err.message })
        })
    }
}
