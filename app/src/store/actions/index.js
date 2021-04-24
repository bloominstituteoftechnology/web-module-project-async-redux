import axios from "axios";

///////////////////// ACTION TYPES /////////////////////
export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const FETCH_POKEMON_COMPLETE = "FETCH_POKEMON_COMPLETE";

export const FETCH_PKMN_START = "FETCH_PKMN_START";
export const FETCH_PKMN_SUCCESS = "FETCH_PKMN_SUCCESS";
export const FETCH_PKMN_FAILURE = "FETCH_PKMN_FAILURE";
export const FETCH_PKMN_COMPLETE = "FETCH_PKMN_COMPLETE";

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

export const fetchPokemon = () => {
  return (dispatch) => {
    // Render loading
    dispatch(actionCreator(FETCH_POKEMON_START));

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=3")
      .then((res) =>
        dispatch(actionCreator(FETCH_POKEMON_SUCCESS, res.data.results))
      )
      .catch((err) =>
        dispatch(actionCreator(FETCH_POKEMON_FAILURE, `${err.message}`))
      )
      .finally(() => dispatch(actionCreator(FETCH_POKEMON_COMPLETE)));
  };
};

export const fetchPkmn = (url) => {
  return (dispatch) => {
    // Render loading
    dispatch(actionCreator(FETCH_PKMN_START));

    axios
      .get(url)
      .then((res) => dispatch(actionCreator(FETCH_PKMN_SUCCESS, res.data)))
      .catch((err) =>
        dispatch(actionCreator(FETCH_PKMN_FAILURE, `${err.message}`))
      )
      .finally(() => dispatch(actionCreator(FETCH_PKMN_COMPLETE)));
  };
};
