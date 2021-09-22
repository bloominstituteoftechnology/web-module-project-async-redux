import {
    FETCH_CATS_START,
    FETCH_CATS_SUCCESS,
    FETCH_CATS_FAIL
  } from '../actions';
  
  const initialState = {
    cats: [],
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
   
    switch (action.type) {
      case FETCH_CATS_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_CATS_SUCCESS:
        return {
          ...state,
          pokemon: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_CATS_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  