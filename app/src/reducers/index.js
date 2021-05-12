import {FETCH_MEME_START, FETCH_MEME_SUCCESS,FETCH_MEME_FAIL} from './../actions';

const initialState = {
    meme: [],
    isFetching: false,
    error:''
};

export const reducer = (state = initialState ,action)=>{
    switch(action.type){
        case(FETCH_MEME_START):
        return({
            ...state,
            meme:{
                title:"",
                url:""
            },
            isFetching:true,
            error:''
        })
        case(FETCH_MEME_SUCCESS):
            return({
                ...state,
                meme: action.payload,
                isFetching: false,
                error:''
            })
        case(FETCH_MEME_FAIL):
            return({
                isFetching:false,
                error:action.payload
            })
        default:
            return state;
    }
}