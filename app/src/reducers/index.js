import { FETCH_START, FETCH_ERROR, FETCH_SUCCESS } from "../Actions/actions";

const initialState = {
    jokes: {
        category: '',
        setup: '',
        delivery: ''
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_START):
        return({
          ...state,
          jokes: {},
          isFetching:true,
          error:''
        });
      case(FETCH_SUCCESS):
        return({
          ...state,
          jokes: action.payload,
          isFetching: false,
          error: ''
        });
      case(FETCH_ERROR):
        return({
          ...state,
          jokes:{},
          isFetching: false,
          error: action.payload
        })
      default:
        return state;
    }
  };