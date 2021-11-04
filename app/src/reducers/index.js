import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';
import movie from './../data.js';

const initialState = {
  movie: 
  // movie,
  {
    name: "The 100",
    image: {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/257/642675.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/257/642675.jpg"
    },
  },

  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        movie: {},
        isFetching:true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        movie: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_ERROR):
      return({
        ...state,
        movie:{},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};