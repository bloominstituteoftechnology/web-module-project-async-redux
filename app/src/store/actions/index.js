import axios from 'axios';

export const FETCH_RICKS_SUCCESS = 'FETCH_RICKS_SUCCESS';
export const FETCH_RICKS_START  = 'FETCH_RICKS_START';
export const FETCH_RICKS_ERROR  = 'FETCH_RICKS_ERROR ';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({type: FETCH_RICKS_START});

        axios
          .get('https://rickandmortyapi.com/api/character')
          .then(res => {
              dispatch({ type: FETCH_RICKS_SUCCESS, payload: res.data.results})
          })
          .catch(err => {
              dispatch({ type: FETCH_RICKS_ERROR, payload: err.message})
          })
    }
}