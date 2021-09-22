import axios from "axios";
export const FETCH_CATS_START = 'FETCH_CATS_START';
export const FETCH_CATS_SUCCESS = 'FETCH_CAT_SUCCESS';
export const FETCH_CATS_FAIL = 'FETCH_CAT_FAIL';

export const getCats = () => (dispatch) => {
    dispatch({ type: FETCH_CATS_START });
    axios
      .get("https://thecatapi.com/")
      .then((res) =>
        dispatch({ type: FETCH_CATS_SUCCESS, payload: res.data.results })
      )
      .catch((err) => dispatch({ type: FETCH_CATS_FAIL, payload: err }));
  };
  