import data from './Data/brewery';// step 7 

import { FETCH_START } from '../actions';// step 19 

const initialState = {// step 5 
        brewery: data,
        loading: false,
        err:''
}

const reducer =(state = initialState, action) => {// step 6
    switch(action.type) {
        case FETCH_START: //* step 16 * // step 20 (take out the strings of FETCH_START)
        return {
            ...state,
            loading: true, 
            error: ''
        }
        default: 
        return(state);
    }
}

export default reducer; 
