import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

function randomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getTeams = () => {
    return(dispatch) => {
        dispatch(fetchStart());

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/')
        .then(res => {
            dispatch(fetchSuccess(res.data.teams[randomId(1,55)]));
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