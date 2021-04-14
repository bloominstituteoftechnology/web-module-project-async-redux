import { TEST_REDUCER } from '../actions/index'

export const initialState = {
    isWorking: true,
    title: 'Hello I am Working!'
}

export const reducer = ( state = initialState, action) => {
    switch(action.type) {
        default:
            return state;

        
    }
}