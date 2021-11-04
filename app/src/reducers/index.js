import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../actions';

const initialState = {
  memes: {
    memeCard: {
      name: "One Does Not Simply",
      url: "https://i.imgflip.com/1bij.jpg",
    },
  },
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        memes: {},
        isFetching:true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        memes: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_ERROR):
      return({
        ...state,
        memes:{},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};