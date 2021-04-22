import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_COMPLETE,
  // FETCH_SINGLE_POKEMON_START,
  FETCH_SINGLE_POKEMON_SUCCESS,
  // FETCH_SINGLE_POKEMON_FAILURE,
  // FETCH_SINGLE_POKEMON_COMPLETE,
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  pokemon: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
      };

    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case FETCH_POKEMON_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_SINGLE_POKEMON_SUCCESS:
      return { ...state, singlePokemon: action.payload };

    default:
      return state;
  }
};
