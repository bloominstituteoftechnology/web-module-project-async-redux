import {
    FETCHING_ALL_MORTYS,
    DISPLAY_ALL_MORTYS,
    NO_MORTYS_FOUND
} from './../actions/index'

const initialState = {
    loading: false,
    characters: [],
    error:{}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCHING_ALL_MORTYS):
            return({
                ...state,
                loading:true
            })
        case(DISPLAY_ALL_MORTYS):
            return({
                ...state,
                loading: false,
                characters: action.payload
            })
            case(NO_MORTYS_FOUND):
                return({
                    ...state,
                    loading: false,
                    error: action.payload
                })
            default:
                return state;
    }
}

export default reducer