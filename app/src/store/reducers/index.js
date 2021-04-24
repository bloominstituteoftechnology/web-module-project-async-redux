import {
  FETCH_POKEMON_URLS_START,
  FETCH_POKEMON_URLS_SUCCESS,
  FETCH_POKEMON_URLS_FAILURE,
  FETCH_POKEMON_URLS_COMPLETE,
  FETCH_PKMN_START,
  FETCH_PKMN_SUCCESS,
  FETCH_PKMN_FAILURE,
  FETCH_PKMN_COMPLETE,
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  pokemonURLs: [],
  pkmnList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_URLS_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_POKEMON_URLS_SUCCESS:
      return {
        ...state,
        pokemonURLs: action.payload,
      };

    case FETCH_POKEMON_URLS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case FETCH_POKEMON_URLS_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_PKMN_SUCCESS:
      if (!state.pkmnList.find((pkmn) => pkmn.id === action.payload.id)) {
        return { ...state, pkmnList: [...state.pkmnList, action.payload] };
      } else {
        return state;
      }

    default:
      return state;
  }
};
