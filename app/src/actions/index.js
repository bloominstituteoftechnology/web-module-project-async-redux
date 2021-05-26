import axios from 'axios';
export const SET_FETCHING_COIN = 'SET_FETCHING_COIN';

export const getCoin = () => (dispatch) => {
    dispatch({ type: SET_FETCHING_COIN });

    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=true")
        .then(res => {
            console.log(res)
        })
};