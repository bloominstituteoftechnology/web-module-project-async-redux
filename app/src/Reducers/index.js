import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../Actions';

const initialState = {
    picture: {
      message: "https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_1572.jpg",
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        isFetching: true
      })
    case(FETCH_SUCCESS):
      return({
        ...state,
        dog: action.payload,
        isFetching: false
      })
    case(FETCH_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
};