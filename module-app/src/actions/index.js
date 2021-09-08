import axios from 'axios'

export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL = 'GET_FAIL';

export const getDog = () => {
    return (dispatch)=> {
        dispatch(getStart());

        axios.get(`https://dog.ceo/api/breeds/image/random`)
            .then(res => {
                console.log(res)
                dispatch(getSuccess(res.data.message))
            })
    }
}

export const getStart = () => {
    return({type: GET_START});
}

export const getSuccess = (dog) => {
    return({type: GET_SUCCESS, payload: dog});
}

export const getFail = (error) => {
    return({type: GET_FAIL, payload:error});
}