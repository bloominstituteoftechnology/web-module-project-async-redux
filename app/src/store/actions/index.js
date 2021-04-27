import axios from "axios";

//\/\/\/\/\/\/\/\/\/\ ACTION TYPES /\/\/\/\/\/\/\/\/\/\\

export const SET_KEYDOWN = "SET_KEYDOWN";

//\/\/\/\/\/\/\/\/\/\ FETCH ACTION TYPES /\/\/\/\/\/\/\/\/\/\\

export const URL_POKEMON = "URL_POKEMON";
export const PREV_URL_POKEMON = "PREV_URL_POKEMON";
export const NEXT_URL_POKEMON = "NEXT_URL_POKEMON";
export const PKMN = "PKMN";
export const fSTART = (dataName) => `FETCH_${dataName}_START`;
export const fSUCCESS = (dataName) => `FETCH_${dataName}_SUCCESS`;
export const fFAILURE = (dataName) => `FETCH_${dataName}_FAILURE`;
export const fCOMPLETE = (dataName) => `FETCH_${dataName}_COMPLETE`;

//\/\/\/\/\/\/\/\/\/\ ACTION CREATOR /\/\/\/\/\/\/\/\/\/\\

const actionCreator = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

//\/\/\/\/\/\/\/\/\/\ ACTIONS /\/\/\/\/\/\/\/\/\/\\

const fetchData = (dispatch, dataName, url) => {
  // set isLoading
  dispatch(actionCreator(fSTART(dataName), url));

  axios
    .get(url)
    .then((res) => {
      dispatch(actionCreator(fSUCCESS(dataName), res.data));
    })
    .catch((err) =>
      dispatch(actionCreator(fFAILURE(dataName), `${err.message}`))
    )
    .finally(() => dispatch(actionCreator(fCOMPLETE(dataName))));
};

export const fetchUrlPokemon = (url) => (dispatch) =>
  fetchData(dispatch, URL_POKEMON, url);

export const fetchPkmn = (url) => (dispatch) => fetchData(dispatch, PKMN, url);

export const fetchPrevNextUrlPokemon = (prevCall, nextCall) => (dispatch) => {
  if (prevCall) {
    fetchData(dispatch, PREV_URL_POKEMON, prevCall);
  }
  if (nextCall) {
    fetchData(dispatch, NEXT_URL_POKEMON, nextCall);
  }
};

export const fetchPrevNextPkmn = (url) => (dispatch) =>
  fetchData(
    dispatch
    // next/prev pkmn actions
  );

export const setKeyDown = (key) => actionCreator(SET_KEYDOWN, key);
