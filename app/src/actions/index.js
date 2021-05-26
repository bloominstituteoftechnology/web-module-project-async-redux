import axios from 'axios';
export const SET_FETCHING_COIN = 'SET_FETCHING_COIN';

export const getRandomCoin = () => (dispatch) => {
    dispatch({ type: SET_FETCHING_COIN });

    axios.get()
    .then(res => {
        console.log(res)
    })
}