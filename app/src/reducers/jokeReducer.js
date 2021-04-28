import {
  FETCHING_FAILURE,
  FETCHING_SUCCESS,
  FETCHING_START,
} from "./actions/jokeActions";

const initialState = {
  joke: {},
  error: "",
  loading: false,
};

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return { ...state, loading: true };
    case FETCHING_SUCCESS:
      return { ...state, loading: false, joke: action.payload };
    case FETCHING_FAILURE:
      return { ...state, loading: false, errore: action.payload };
    default:
      return state;
  }
};
