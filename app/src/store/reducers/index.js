import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_COMPLETE,
  FETCH_PKMN_START,
  FETCH_PKMN_SUCCESS,
  FETCH_PKMN_FAILURE,
  FETCH_PKMN_COMPLETE,
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  pokemon: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
  pkmnList: [],
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

    case FETCH_PKMN_SUCCESS:
      return { ...state, pkmnList: [...state.pkmnList, action.payload] };

    default:
      return state;
  }
};
