import axios from "axios";

///////////////////// ACTION TYPES /////////////////////
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const FETCH_POKEMON_COMPLETE = "FETCH_POKEMON_COMPLETE";

export const FETCH_SINGLE_POKEMON_START = "FETCH_SINGLE_POKEMON_START";
export const FETCH_SINGLE_POKEMON_SUCCESS = "FETCH_SINGLE_POKEMON_SUCCESS";
export const FETCH_SINGLE_POKEMON_FAILURE = "FETCH_SINGLE_POKEMON_FAILURE";
export const FETCH_SINGLE_POKEMON_COMPLETE = "FETCH_SINGLE_POKEMON_COMPLETE";

///////////////////// ACTION CREATOR /////////////////////

const actionCreator = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

///////////////////// ACTION THUNKS /////////////////////

// export const fetchData = () => {
//   return (dispatch) => {
//     // Render loading
//     dispatch(actionCreator(FETCH_POKEMON_START));

//     axios
//       .get("https://pokeapi.co/api/v2/pokemon?limit=151")
//       .then((res) =>
//         dispatch(actionCreator(FETCH_POKEMON_SUCCESS, res.data.results))
//       )
//       .catch((err) =>
//         dispatch(
//           actionCreator(
//             FETCH_POKEMON_FAILURE,
//             `${err.response.status} ${err.response.data}`
//           )
//         )
//       )
//       .finally(() => dispatch(actionCreator(FETCH_POKEMON_COMPLETE)));
//   };
// };

const fetchData = (
  url,
  startAction,
  successAction,
  failureAction,
  completeAction,
  formOfResponse
) => () => {
  return (dispatch) => {
    // Render loading
    dispatch(actionCreator(startAction));

    axios
      .get(url)
      .then((res) =>
        dispatch(
          actionCreator(
            successAction,
            formOfResponse ? res.data.results : res.data
          )
        )
      )
      .catch((err) =>
        dispatch(
          actionCreator(
            failureAction,
            `${err.response.status} ${err.response.data}`
          )
        )
      )
      .finally(() => dispatch(actionCreator(completeAction)));
  };
};

export const fetchPokemon = fetchData(
  "https://pokeapi.co/api/v2/pokemon?limit=151",
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_COMPLETE,
  "res.data.results"
);

export const fetchSinglePokemon = fetchData(
  "https://pokeapi.co/api/v2/pokemon/10",
  FETCH_SINGLE_POKEMON_START,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_FAILURE,
  FETCH_SINGLE_POKEMON_COMPLETE
);
