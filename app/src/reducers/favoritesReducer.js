import { ADD_FAVORITES, REMOVE_FAVORITES } from "./../actions/favoritesAction";

const initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      return state;
    default:
      return state;
  }
};

export default reducer;
