import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_START = 'FETCH_START';


export const fetchData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_START})

        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(res => {
            console.log(res)
            dispatch({type:FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err.message);
            dispatch({type:FETCH_FAILURE, payload: err.message})
        })
    }
}