import axios from "axios"

// constants
export const FETCH_TERMS_FAIL = "FETCH_TERMS_FAIL";
export const FETCH_TERMS_SUCCESS = "FETCH_TERMS_SUCCESS";
export const FETCH_TERMS_LOADING = "FETCH_TERMS_LOADING";

export const getItunesTermResults = (inputValue) => dispatch => {

    dispatch({ type: FETCH_TERMS_LOADING })
    axios.get(`https://itunes.apple.com/search?term=${inputValue}`)
        .then(res => {
            console.log("input", inputValue)
            console.log("inputValue and results", inputValue, res.data.results);
            dispatch({
                type: FETCH_TERMS_SUCCESS,
                payload: res.data.results,
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_TERMS_FAIL,
                payload: err.error,
            })
        })
}


  // 1. start loading
    // 2. do our api call
    // 3. success on succes api call
    // 4. fail on fail api call

