import { 
    FETCH_CATS_LOADING, 
    FETCH_CATS_SUCCESS, 
    FETCH_CATS_FAIL 
  } from "../actions";


  const initialState = {
    petcat: {
      breed: [],
      id: "",
      url: "", 
    },
    isFetching: false,
    error: ''
  };
  
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_CATS_LOADING):
        return({
          ...state, 
          isFetching: true
        })
      case(FETCH_CATS_SUCCESS):
        return({
          ...state,
          petcat: action.payload,
          isFetching: false
        })
      case(FETCH_CATS_FAIL):
        return({
          ...state,
          error: action.payload,
          isFetching: false
        })
      default:
        return state;
    }
  };