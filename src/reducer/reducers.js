import{FETCH_DATA_START, FETCH_DATA_FAIL,FETCH_DATA_SUCCESS} from"../action/actions";

const intialState = {
    isLoading:false,
    quotes:"",
    error:''
}

export const reducer = (state = intialState, action)=>{
    switch(action.type){
        case FETCH_DATA_START:
            return{
                ...state,
                isLoading:true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                quotes:action.payload,
                isLoading:false,
                error:''
            }
        case FETCH_DATA_FAIL:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        default:
            return state;
    }
}