import { GET_DOG_FACTS } from "../actions/index";

const initialState = {
    fact: ''
}

export const dogFactsFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOG_FACTS:
            return {...state, fact: action.fact}
        default:
            return state;
    }
}
