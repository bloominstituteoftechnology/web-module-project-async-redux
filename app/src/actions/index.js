import axios from 'axios';
export const FETCHING_ALL_MORTYS = 'FETCHING_ALL_MORTYS'
export const DISPLAY_ALL_MORTYS = 'DISPLAY_ALL_MORTYS'
export const NO_MORTYS_FOUND = 'NO_MORTYS_FOUND'




export const allMortys = () => {
    return dispatch => {
        dispatch({type:FETCHING_ALL_MORTYS})
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
            console.log("HERE I AM  ",res.data);
            dispatch({
                type: DISPLAY_ALL_MORTYS,
                payload:res.data.results
            })
        })
        .catch(err => {
            dispatch({
                type: NO_MORTYS_FOUND,
                payload: err
            })
        })
    }
}