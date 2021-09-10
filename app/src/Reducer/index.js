import data from './Data/brewery';// step 7 

const initialState = {// step 5 
        brewery: data,
        loading: false,
        err:''
}

const reducer =(state = initialState, action) => {// step 6
    switch(action.type) {
        default: 
        return(state);
    }
}

export default reducer; 
