import {GET_POKEMON_LOAD, GET_POKEMON_SUCCESS, GET_POKEMON_FAIL} from '../actions'

const initialState = {
    pokedex: [],
    isGetting: false,
    error: '',
    query: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMON_LOAD:
            return({
                ...state,
                isGetting: true
            })
        case GET_POKEMON_SUCCESS:
            return({
                ...state,
                pokedex: action.payload,
                isGetting: false
            })
        case GET_POKEMON_FAIL:
            return({
                ...state,
                error: action.payload,
                isGetting: false
            })
        default:
            return state
    }
}

export default reducer