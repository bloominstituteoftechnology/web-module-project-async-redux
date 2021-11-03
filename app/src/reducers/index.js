import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './..actions'

const initialState = {
    dog: {picture:''},
    isFetching: false,
    error:''
}

export const reducers = (state = initialState, action) => {
    switch (action.type){
        case(FETCH_START):
        return({...state, isFetching: true})
        case(FETCH_SUCCESS):
        return({...state, isFetching: false, dog: action.payload})
        case(FETCH_FAIL):
        return({...state, error: action.payload, isFetching: false})
        default: return state
    }
}