import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL} from './../actions'

const initialState={
    dog:[],
    isFetching: false,
    err: ''
}
export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_DATA:
            return({
                ...state,
                isFetching: true,
                err: ''
            })
            case FETCH_SUCCESS:
                return({
                    ...state,
                    dog: action.payload,
                    isFetching: false
                })
                case FETCH_FAIL:
                    return({
                        ...state,
                        err: action.payload,
                        isFetching: false
                    })
        default:
            return state
    }
}