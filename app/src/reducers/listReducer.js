import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
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
    default:
      return state;
  }
};

export default reducer;
