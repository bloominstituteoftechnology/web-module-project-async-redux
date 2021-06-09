import axios from 'axios';

export const GET_POKEMON = "GET_POKEMON"
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getPokemon = (id) => {
    return (dispatch) => {

        dispatch(fetchStart())

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => {
            console.log(resp)
            dispatch(fetchSuccess(resp.data))
        })
    }
    return({type: GET_POKEMON})
}


export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (pokemon)=> {
    return({type: FETCH_SUCCESS, payload:pokemon});
}

// export const fetchFail = (error)=> {
//     return({type: FETCH_FAIL, payload:error});