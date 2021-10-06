import axios from 'axios'

export const FETCHING_ORDERS_LOADING = 'FETCHING_ORDERS_LOADING';
export const FETCHING_ORDERS_SUCCESS = 'FETCHING_ORDERS_SUCCESS';
export const FETCHING_ORDERS_FAIL = 'FETCHING_ORDERS_FAIL';

export const getOrders = () => {

    return dispatch => {
        dispatch({type: FETCHING_ORDERS_LOADING})
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD/')
            .then(res => {
                console.log('res: ', res)
                console.log('res.date ', res.data)
                console.log('res.data.coin: ', res.data.coins)
                 dispatch({type: FETCHING_ORDERS_SUCCESS, payload: res.data.coins})
            })
            .catch(err => {
                console.log('error: console', err)
                dispatch({type: FETCHING_ORDERS_FAIL, payload: 'ERROR'})
            })
    }
}