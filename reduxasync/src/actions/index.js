import axios from "axios";
// CONSTANTS
export const FETCH_CATS_LOADING = "FETCH_CATS_LOADING";
export const FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS";
export const FETCH_CATS_FAIL = "FETCH_CATS_FAIL";


// Action Creators => functions that return action objects
export function fetchCatsLoading(){
    return({
        type: FETCH_CATS_LOADING
    })
}

export const fetchCatsSuccess = (petcat) => {
    return({
        type: FETCH_CATS_SUCCESS,
        payload: petcat
    })
}

export const fetchCatsFail = (error) => {
    return({
        type: FETCH_CATS_FAIL,
        payload: error
    })
}

export const getPetcat = () => {
    // 1. start load
    // 2. do our call
    // 3. success on successful call
    // 4. fail on failed call

    return dispatch => {
        dispatch({ type: FETCH_CATS_LOADING })
        axios
            .get('https://api.thecatapi.com/v1/images/search')
                .then(res => {
                    dispatch({ type: FETCH_CATS_SUCCESS, payload: res.data.results[0]})
                })
                .catch(err => {
                    dispatch({ type: FETCH_CATS_FAIL, payload: err.error })
                })
    }
} 