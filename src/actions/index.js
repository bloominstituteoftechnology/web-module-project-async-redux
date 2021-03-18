import axios from "axios";
export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
export const fetchData = () => {
  return (dispatch) => {
    // tell the reducer we are going to enter a "loading state"
    dispatch({ type: FETCH_ARTICLES_START });

    // start the fetch
    axios
      .get("https://test.spaceflightnewsapi.net/api/v2/articles")
      .then((res) => {
        console.log(res);
        // send the reducer the data
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err.message);
        //   dispatch({ type: FETCH_SPELLS_FAILURE, payload: err.message });
      });
  };
};
