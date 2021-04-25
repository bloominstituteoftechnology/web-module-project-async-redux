import axios from "axios";

//\/\/\/\/\/\/\/\/\/\ ACTION TYPES /\/\/\/\/\/\/\/\/\/\\
export const FETCH_URL_POKEMON_START = "FETCH_URL_POKEMON_START";
export const FETCH_URL_POKEMON_SUCCESS = "FETCH_URL_POKEMON_SUCCESS";
export const FETCH_URL_POKEMON_FAILURE = "FETCH_URL_POKEMON_FAILURE";
export const FETCH_URL_POKEMON_COMPLETE = "FETCH_URL_POKEMON_COMPLETE";

export const FETCH_PKMN_START = "FETCH_PKMN_START";
export const FETCH_PKMN_SUCCESS = "FETCH_PKMN_SUCCESS";
export const FETCH_PKMN_FAILURE = "FETCH_PKMN_FAILURE";
export const FETCH_PKMN_COMPLETE = "FETCH_PKMN_COMPLETE";

//\/\/\/\/\/\/\/\/\/\ ACTION CREATOR /\/\/\/\/\/\/\/\/\/\\

const actionCreator = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

//\/\/\/\/\/\/\/\/\/\ ACTION THUNKS /\/\/\/\/\/\/\/\/\/\\

const fetchData = (dispatch, start, success, failure, complete, url) => {
  // set isLoading
  dispatch(actionCreator(start, url));

  axios
    .get(url)
    .then((res) => {
      dispatch(actionCreator(success, res.data));
    })
    .catch((err) => dispatch(actionCreator(failure, `${err.message}`)))
    .finally(() => dispatch(actionCreator(complete)));
};

export const fetchUrlPokemon = (url) => (dispatch) =>
  fetchData(
    dispatch,
    FETCH_URL_POKEMON_START,
    FETCH_URL_POKEMON_SUCCESS,
    FETCH_URL_POKEMON_FAILURE,
    FETCH_URL_POKEMON_COMPLETE,
    url
  );

export const fetchPkmn = (url) => (dispatch) =>
  fetchData(
    dispatch,
    FETCH_PKMN_START,
    FETCH_PKMN_SUCCESS,
    FETCH_PKMN_FAILURE,
    FETCH_PKMN_COMPLETE,
    url
  );
