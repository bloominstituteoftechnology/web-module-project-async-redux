import axios from 'axios';

export const getHero = () =>{
    return (dispatch) =>{
        console.log(dispatch)
        dispatch(fetchStart())
        axios.get('https://superheroapi.com/api/913760462568460')
        .then(res =>{
            dispatch(res.data)
        })
        .catch(err =>{
            dispatch(err)
        })
    }
}

export const FETCH_START = 'FETCH_START';
export const fetchStart = () =>{
    return ({type: FETCH_START})
}