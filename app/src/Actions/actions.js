import axios from "axios";

export const gottaJoke = () => {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('https://v2.jokeapi.dev/joke/Any')
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchError(err))
            })
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (jokes)=> {
    return({type: FETCH_SUCCESS, payload: jokes});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}