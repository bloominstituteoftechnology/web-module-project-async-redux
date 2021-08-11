import {FETCH_START} from './../actions';

const initialState = {
    hero: {
        name: '',
        url: ''
    }
}


export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case(FETCH_START):
            return({
                ...state,
                hero: action.payload
            })
        default:
            return state
    }
}