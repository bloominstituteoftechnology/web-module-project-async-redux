import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';

const initialState = {
  joke: {
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
        joke: {},
        isFetching:true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        joke: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_ERROR):
      return({
        ...state,
        joke:{},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};