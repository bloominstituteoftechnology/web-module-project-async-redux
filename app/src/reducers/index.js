import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../actions";

const initialState = {
  giphy: {
    title: "",
    images: {
      image_original_url:""
    }
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
    return({
      ...state,
      giphy: {},
      isFetching: true,
      error: ''
    });
    case(FETCH_SUCCESS):
    return({
      ...state,
      giphy: action.payload,
      isFetching: false,
      error: ''
    });
    case (FETCH_FAIL):
      return({
        ...state,
        giphy: {},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};
