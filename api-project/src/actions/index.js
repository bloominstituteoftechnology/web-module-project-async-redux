import axios from "axios";

export const UPDATE_INPUT = "Update Inout"
export const GET_DEFINITION = "Get Definition"
export const GOT_WORD = "Got Word"

export const updateInput = text => {
    return {type: UPDATE_INPUT, text}
}

export const getDefinition = word => dispatch => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(result => {
            console.log(result)
            const newWord = result.data[0].word
            const partOfSpeech = result.data[0].meanings[0].partOfSpeech
            const definition = result.data[0].meanings[0].definitions[0].definition
            const example = result.data[0].meanings[0].definitions[0].example
            dispatch(gotWord(newWord, partOfSpeech, definition, example))  
        })
}

export const gotWord = (newWord, partOfSpeech, definition, example) => {
    return {type: GOT_WORD, newWord, partOfSpeech, definition, example}
}