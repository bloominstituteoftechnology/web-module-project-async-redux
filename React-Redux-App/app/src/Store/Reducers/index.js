import {
    FETCH_ANIME_SUCCESS,
    FETCH_ANIME_START,
    FETCH_ANIME_FAILURE
  } from "./../Actions/index"

const initialState = {
    loading: false,
    anime: [],
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ANIME_START:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_ANIME_SUCCESS:
            return {
                ...state,
                anime: action.payload,
                loading: false,
                error: ""
            }
        case FETCH_ANIME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}