import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"

// API calls and other asynchronous "thunky stuff" happens here in asynchronous actions, not in the reducer.
//"https://official-joke-api.appspot.com/jokes/programming/random"
//https://dog.ceo/api/breeds/image/random
//https://foodish-api.herokuapp.com/

// When looking over an actions file, the ones with the weird double-nested structure are thunk "asynchronous actions", while the other normal ones are standard (synchronous) action creators.

export const fetchImage = () => (dispatch) => {
  // start a fetch (dispatch FETCHING_START)
  dispatch({ type: FETCHING_START });
  axios.get("https://foodish-api.herokuapp.com/")
    // if happy path, dispatch the happy action
    .then((res => {
      console.log("API image data:", res.data.config.url);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data.config.url})
    }))
    // if sad path, dispatch the sad ation
    .catch(err => {
      console.log(err);
      dispatch({type: FETCHING_FAILURE, payload: err})
    });
}