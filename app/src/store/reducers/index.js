import {
  FETCH_URL_POKEMON_START,
  FETCH_URL_POKEMON_SUCCESS,
  FETCH_URL_POKEMON_FAILURE,
  FETCH_URL_POKEMON_COMPLETE,
  // FETCH_PKMN_START,
  FETCH_PKMN_SUCCESS,
  // FETCH_PKMN_FAILURE,
  // FETCH_PKMN_COMPLETE,
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  urlPokemon: [],
  pokemonList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_URL_POKEMON_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_URL_POKEMON_SUCCESS:
      return {
        ...state,
        urlPokemon: action.payload,
      };

    case FETCH_URL_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case FETCH_URL_POKEMON_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };

    // case FETCH_PKMN_START:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };

    case FETCH_PKMN_SUCCESS:
      if (!state.pokemonList.find((pkmn) => pkmn.id === action.payload.id)) {
        return {
          ...state,
          pokemonList: [...state.pokemonList, action.payload].sort(
            (a, b) => a.id - b.id
          ),
        };
      } else {
        return state;
      }

    // case FETCH_PKMN_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    // case FETCH_PKMN_COMPLETE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };

    default:
      return state;
  }
};
