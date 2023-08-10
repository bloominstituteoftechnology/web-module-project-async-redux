import axios from "axios";
export const FETCH_START = "FETCH_START";
export const SUCCESSFUL_FETCH = "SUCCESSFUL_FETCH";

export const getZipCode = (newZipCode) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get(`https://api.zippopotam.us/us/${newZipCode}`)
      .then((res) => {
        dispatch({ type: SUCCESSFUL_FETCH, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const successfulFetch = (zipCodeData) => {
  return { type: SUCCESSFUL_FETCH, payload: zipCodeData };
};
