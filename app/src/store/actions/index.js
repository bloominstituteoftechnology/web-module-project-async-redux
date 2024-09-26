import axios from 'axios';
/// action type

export const MISSON_START = 'MISSON_START';

export const MISSON_SUCCESS = 'MISSON_SUCCESS';

//action creaters

export const getALlMissons = () => {
  return (dispatch) => {
    dispatch({ type: MISSON_START });

  axios.get('https://api.spacexdata.com/v3/missions')
  .then((response) => {
    dispatch({type:MISSON_SUCCESS, payload:response.data});
  })
  .catch ((error) => {console.error(error);})
};
}