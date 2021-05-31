import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE} from "../actions/actions"

const initialState = {
    character: [],
    isFetching: false,
    error: ''
  };

  export const reducer = (state = initialState, action) => {
      switch(action.type){
          case(FETCH_CHARACTER_START):
            return({
                ...state,
                isFetching: true,
            })
            case(FETCH_CHARACTER_SUCCESS):
            return({
                ...state,
                character:[...action.payload],
                isFetching: false,
            })
            case(FETCH_CHARACTER_FAILURE):
            return({
                ...state,
                error: 'AWWWW SHIT'
            })
            default:
                return state;
      }
  }