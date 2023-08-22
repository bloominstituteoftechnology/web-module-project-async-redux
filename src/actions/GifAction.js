import axios from "axios";

export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const search = (input) => dispatch => {
    dispatch(setIsFetching(true));
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Rc4z5w3LRWM5pjEILUqVhHdANlmsFSug&q=${input}`)
    .then(res => { 
        dispatch(searchSuccess(res.data.data))
    })
    .catch(err => {
        dispatch(searchError("Request failed with status code 401"))
    })
}

const setIsFetching = (isFetching) => {
    return{
        type: SET_IS_FETCHING, payload: isFetching
    }
}

const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS, payload: data
    }
}

const searchError = (error) => {
    return {
        type: SEARCH_ERROR, payload: error
    }
}