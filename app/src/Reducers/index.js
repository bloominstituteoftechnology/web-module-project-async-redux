import { DOG_FACTS_LOADING, DOG_FACTS_SUCCESS, DOG_FACTS_FAIL } from '../Actions/index'

const initialState = {
    facts: '',
    isFetching: false,
    error: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case(DOG_FACTS_LOADING):
        return ({
            ...state,
            isFetching: true
        })
        case(DOG_FACTS_SUCCESS):
        return({
            ...state,
            facts: action.payload,
            isFetching: false
        })
        case(DOG_FACTS_FAIL):
        return({
            ...state,
            error:action.payload,
            isFetching: false
        })
        default:
            return state
    }
}