import { ADD_GENRE, FETCHING_GENRE } from "../actions/index";

export const initialState = {
  genre: null,
  isFetching: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GENRE:
      return {
        ...state,
        genre: action.payload,
        isFetching: false,
      };
    case FETCHING_GENRE:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
};

export default reducer;
