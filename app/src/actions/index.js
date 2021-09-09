import axios from 'axios';
export const FETCH_START = "FETCH_START ";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const getDog = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res=>{
            console.log('Actions/index.js ln:8 res.data', res.data);
            dispatch(fetchSuccess(res.data.message))
        })
    }
}


export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (dog) => {
    return({type: FETCH_SUCCESS, payload:dog})
}

export const fetchFail = () => {
    return({type: FETCH_FAIL})
}