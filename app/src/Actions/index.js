import axios from 'axios'

export const DOG_FACTS_LOADING = 'DOG_FACTS_LOADING'
export const DOG_FACTS_SUCCESS = 'DOG_FACTS_SUCCESS'
export const DOG_FACTS_FAIL = 'DOG_FACTS_FAIL'

export const getDogFacts = () => {
    return dispatch => {
        dispatch({type: DOG_FACTS_LOADING})
        axios
        .get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
        .then(response => {
            dispatch({type: DOG_FACTS_SUCCESS, payload: response.fact})
        })
        .catch(error => {
            dispatch({ type:DOG_FACTS_FAIL, payload: error.error})
        })
    }
}

export const dogFactsLoading = () => {
    return ({ type: DOG_FACTS_LOADING})
}
export const dogFactsSuccess = (facts) => {
    return ({ type: DOG_FACTS_SUCCESS, payload:facts})
}
export const dogFactsFail = (error) => {
    return ({type: DOG_FACTS_FAIL, payload:error})
}