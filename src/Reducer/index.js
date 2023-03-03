import { data } from "../data/jokes";

const initialState = {
    jokes: data,
    loading: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer