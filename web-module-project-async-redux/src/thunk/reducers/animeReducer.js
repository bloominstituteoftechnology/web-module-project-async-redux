import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../actions/animeActions";

const initialState = {
    show: {
        anime: "",
        character: "",
        quote: "",
    },

    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({
                ...state,
                show: {},
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
            return ({
                ...state,
                show: action.payload,
                isFetching: false,
                error: ''
            });
        case (FETCH_FAIL):
            return ({
                ...state,
                show: {},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}