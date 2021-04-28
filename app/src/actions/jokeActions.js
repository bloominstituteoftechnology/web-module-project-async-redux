import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const fetchJoke = () => (dispatch) => {
  dispatch({ type: FETCHING_START });
  axios
    .get("https://opentdb.com/api.php?amount=10")
    .then((res) => {
      console.log("joke data", res.data[0]);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data[0] });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCHING_FAILURE, payload: err });
    });
};
