import { ADD_GENRE } from "../actions/index";

export const initialState = {
  genre: null,
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
