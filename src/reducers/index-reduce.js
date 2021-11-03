import { GET_START, GET_SUCCESS, GET_FAIL} from './../actions'

const initialState = {
    picture: '',
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(GET_START):
          return({
              ...state,
              picture: '',
              isFetching: true,
              error: ''
          });
        case(GET_SUCCESS):
          return({
              ...state,
              picture: action.payload,
              isFetching: false,
              error: ''
          });
        case(GET_FAIL):
          return({
              ...state,
              picture: '',
              isFetching: false,
              error: action.payload
          })
        default:
            return state;
    }
};