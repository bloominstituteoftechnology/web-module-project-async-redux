import { GET_JOKE_SUCCESS, GET_JOKE_ERROR, SET_IS_FETCHING } from "../actions";


const initialState = {
    joke: {
        type: '',
        setup: '',
        punchline: '',
        id: 0
    },
    isFetching: false,
    error: ''

}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case GET_JOKE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                joke: action.payload
            }
        case GET_JOKE_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
