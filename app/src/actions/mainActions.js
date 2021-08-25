import axios from 'axios';

export const FETCH_YUGIOH_START = 'FETCH_YUGIOH_START';
export const FETCH_YUGIOH_SUCCESS = 'FETCH_YUGIOH_SUCCESS';
export const FETCH_YUGIOH_FAIL = 'FETCH_YUGIOH_FAIL';

export const getYugioh = () => dispatch => {
  dispatch({ type: FETCH_YUGIOH_START });
  axios
    .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
    .then(res => 
      dispatch({ type: FETCH_YUGIOH_SUCCESS, payload: res.data.data }),
    )
    .catch(err => dispatch({ type: FETCH_YUGIOH_FAIL, payload: err }));

};