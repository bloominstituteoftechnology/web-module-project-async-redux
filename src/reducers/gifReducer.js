import { SEARCH_SUCCESS, SEARCH_ERROR, SET_IS_FETCHING } from "../actions/GifAction";
import data from "../data/gifs";

const initialState = {
    data,
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ""
            }
        case SEARCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}
