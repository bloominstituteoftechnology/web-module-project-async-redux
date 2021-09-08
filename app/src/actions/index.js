import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getAvs = () => {
    // console.log('getTabs works')
    return(dispatch) => {
        dispatch(fetchStart());

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/21')
        .then(res => {
            console.log('RES',res.data.teams)
            dispatch(fetchSuccess(res.data.teams));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
    }
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = (teams) => {
    return ({ type: FETCH_SUCCESS, payload: teams });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}