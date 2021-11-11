import { FETCH_SUCCESS, IS_FETCHING, ERROR, ADD_FAVORITE, DELETE_FAVORITE } from './../actions';

const initialState = {
    suggestion:{
        activity:'',
        type:'',
        id:0
    },
    isFetching: false,
    error:'',
    favorites:[],
    history:[]
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case(FETCH_SUCCESS):
            return({
                ...state,
                suggestion: action.payload,
                isFetching: false
            });
        case(IS_FETCHING):
            return({
                ...state,
                isFetching: true
            });
        case(ERROR):
            return({
                ...state,
                ifFetching: false,
                error: action.payload
            })
        case(ADD_FAVORITE):
            return({
                ...state,
                favorites:[...state.favorites, action.payload]
            })
        case(DELETE_FAVORITE):
            return({
                ...state,
                favorites: state.favorites.filter(favorite=>{
                    return favorite.id !== action.payload
                }),
                history: 
                    [...state.history,
                    state.favorites.find(favorite=>{
                    return (favorite.id === action.payload)
                    })],
            })
        default:
            return state;
    }
}