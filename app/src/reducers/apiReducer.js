import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from "../actions/apiAction"

const initialState ={
    cat: {},
    error: '',
    loading: false
}

export const apiReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCHING_START:
      return {...state, loading: true}
    case FETCHING_SUCCESS:
      return {...state, loading: false, cat: action.payload}
    case FETCHING_FAILURE:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
    }
}