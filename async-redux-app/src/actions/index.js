import axios from "axios";

export const START_FETCH = "START_FETCH";
export const SUCCESSFUL_FETCH = "SUCCESSFUL_FETCH";
export const FAILD_FETCH = "FAILD_FETCH";

export const getDog = () => {
    return (dispatch) => {
        dispatch(startFetch());
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res=>{
            dispatch(successfulFetch(res.data.message))
        })
        .catch(err => {
            dispatch(faildFetch(err));
        });
    }
}

export const startFetch = () => {
    return({type: START_FETCH});
}

export const successfulFetch = (dog)=> {
    return({type: SUCCESSFUL_FETCH, payload: dog});
}

export const faildFetch = (error)=> {
    return({type: FAILD_FETCH, payload: error});
}