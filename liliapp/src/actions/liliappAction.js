import axios from "axios";


export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"

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