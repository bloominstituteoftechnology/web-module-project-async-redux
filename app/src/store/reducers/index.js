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
  pagination: {
    totPokemonCount: 0,
    nextCall: null,
    prevCall: null,
    currentCall: {
      callCount: 0,
      prevCount: 0,
      nextCount: 0,
    },
  },
};

const parseCall = (totCount, count, prev, next) => {
  let prevCount;
  let nextCount;
  const url = prev ? prev : next;
  const splitUrl = url.split("=");
  if (prev) {
    prevCount = parseInt(splitUrl[2]) + parseInt(splitUrl[1]);
    nextCount = totCount - (prevCount + parseInt(splitUrl[2]));
  } else {
    nextCount = totCount - parseInt(splitUrl[2]);
    prevCount = 0;
  }

  return {
    callCount: count,
    prevCount: prevCount,
    nextCount: nextCount,
  };
};

export const reducer = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case FETCH_URL_POKEMON_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_URL_POKEMON_SUCCESS:
      const { results, count, next, previous } = payload;
      return {
        ...state,
        urlPokemon: results,
        pagination: {
          ...state.pagination,
          totPokemonCount: count,
          nextCall: next,
          prevCall: previous,
          currentCall: parseCall(count, results.length, previous, next),
        },
      };

    case FETCH_URL_POKEMON_FAILURE:
      return {
        ...state,
        error: payload,
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
      if (!state.pokemonList.find((pkmn) => pkmn.id === payload.id)) {
        return {
          ...state,
          pokemonList: [...state.pokemonList, payload].sort(
            (a, b) => a.id - b.id
          ),
        };
      } else {
        return state;
      }

    // case FETCH_PKMN_FAILURE:
    //   return {
    //     ...state,
    //     error: payload,
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
