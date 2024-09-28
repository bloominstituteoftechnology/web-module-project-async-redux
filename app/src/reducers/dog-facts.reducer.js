import { GET_DOG_FACTS, GOT_DOG_FACTS } from "../actions/index";

const initialState = {
    fact: '',
}

export const dogFactsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_DOG_FACTS:
            console.log(action);
            return {...state, fact: action.fact}
        default:
            return state;
    }
}