import axios from "axios"

export const GET_TEAMS = 'Get Teams'
export const GOT_TEAMS = 'Got Teams'

export const getTeams = () => dispatch => {
    axios.get('https://www.balldontlie.io/api/v1/teams').then(
        res => {
            console.log(res)
            const allTeams = res.data.data
            dispatch(gotTeams(allTeams))
        })
}

export const gotTeams = (teams) => {
    return ({ type: GOT_TEAMS, payload: teams })
}

