import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SEARCH_CRYPTO,
} from "../actions/listAction.js";

const initialState = {
  cryptos: [],
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        cryptos: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        cryptos: [],
        isFetching: false,
        error: action.payload,
      };
    case SEARCH_CRYPTO:
      return {
        ...state,
        cryptos: state.cryptos.filter((item) => {
          const searchName = item.id.toLowerCase();
          return searchName.includes(action.payload);
        }),
        isFetching: false,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
