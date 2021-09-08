import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getCoinData = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        //dispatch({ type: FETCH_SUCCESS, payload: res.data. whatever else needed })
        // dispatch(fetchSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        //dispatch({ type: FETCH_FAIL, payload: err })
        //dispatch(fetchFail(err))
        console.log(err);
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
