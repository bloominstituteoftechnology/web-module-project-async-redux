import { GET_DEFINITION, GOT_WORD } from "../actions";

const initialState = {
    word: '',
    partOfSpeech: '',
    def: '',
    example: ''
}

export const wordInfoReducer =  (state = initialState, action) => {
    switch(action.type) {
        case GOT_WORD:
            console.log(action)
            return {...state, word: action.newWord, partOfSpeech: action.partOfSpeech, def: action.definition, example: action.example}
        default:
            return state
    }
}