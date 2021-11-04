import axios from 'axios'

export const getCharacters = ()=> {
    return (dispatch) => {

        axios.get('https://rickandmortyapi.com/api/character')
          .then(res => {
            dispatch(fetchSuccess(res.data.results[0]));
        })
        .catch(err => {
            console.error(err)
        });
    }
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (characters) => {
    return({
        type: FETCH_SUCCESS,
        payload: characters
    })
}

