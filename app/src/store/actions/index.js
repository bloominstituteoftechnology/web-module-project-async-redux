import axios from "axios";

///////////////////// ACTION TYPES /////////////////////
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const FETCH_POKEMON_COMPLETE = "FETCH_POKEMON_COMPLETE";

///////////////////// ACTION CREATOR /////////////////////

const actionCreator = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

///////////////////// ACTION THUNK /////////////////////

export const fetchData = () => {
  return (dispatch) => {
    // Render loading
    dispatch(actionCreator(FETCH_POKEMON_START));

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) =>
        dispatch(actionCreator(FETCH_POKEMON_SUCCESS, res.data.results))
      )
      .catch((err) =>
        dispatch(
          actionCreator(
            FETCH_POKEMON_FAILURE,
            `${err.response.status} ${err.response.data}`
          )
        )
      )
      .finally(() => dispatch(actionCreator(FETCH_POKEMON_COMPLETE)));
  };
};
