import axios from 'axios'

export const getBreweries = () => {
    return (dispatch) => {
        dispatch(isFetching());
        setTimeout(()=> {
            axios.get('https://api.openbrewerydb.org/breweries/')
                .then(res=> {
                    dispatch(fetchSuccess(res.data));
                }
                    // dispatch(setBreweries(res))
                )
                .catch(err => dispatch(fetchFail(err)))
        }, 1500)
    }
}

export const IS_FETCHING = 'IS_FETCHING'
export const isFetching = () => {
    return ({type: IS_FETCHING})
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const fetchSuccess = (breweries) => {
    return ({type: FETCH_SUCCESS, payload: breweries})
}

export const FETCH_FAIL = 'FETCH_FAIL'
export const fetchFail = (err) => {
    return ({type: FETCH_FAIL, payload: err})
}
