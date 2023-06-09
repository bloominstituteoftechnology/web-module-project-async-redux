import axios from "axios";
export const FETCH_START = "FETCH_START";
export const SUCCESSFUL_FETCH = "SUCCESSFUL_FETCH";

export const getZipCode = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.get(`https://api.zippopotam.us/us/3316`).then((res) => {
      dispatch({ type: SUCCESSFUL_FETCH, action: res.data });
    });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const successfulFetch = (zipCodeData) => {
  return { type: SUCCESSFUL_FETCH, payload: zipCodeData };
};
