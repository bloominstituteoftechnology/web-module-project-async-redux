import axios from 'axios'

export const getBreweries = () => {
    console.log('start of getBreweries')
    return (dispatch) => {
        dispatch(isFetching());
        axios.get('https://api.openbrewerydb.org/breweries/')
            .then(res=> console.log(res)
                // console.log(res),
                // dispatch(setBreweries(res))
            )
            .catch(err => console.log(err))
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
