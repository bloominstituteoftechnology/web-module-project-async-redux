import { UPDATE_INPUT } from "../actions/index"

const initialState = {
    word: ''
}

export const wordFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT:
            return {...state, word: action.text}
        default:
            return state
    }
}