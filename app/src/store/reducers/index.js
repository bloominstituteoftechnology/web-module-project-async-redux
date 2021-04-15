import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_COMPLETE,
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
        // isLoading: false,
      };

    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload,
        // isLoading: false,
      };

    case FETCH_POKEMON_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
