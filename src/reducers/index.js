import {
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
} from "../actions";

export const initalState = {
  articles: [],
  isLoading: false,
  errorMessage: "",
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isLoading: false,
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case FETCH_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
