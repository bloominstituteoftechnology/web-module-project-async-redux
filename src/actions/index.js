import axios from "axios"

export const GET_CARDS_START = 'GET_CARDS_START'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE'
export const LOAD_CARDS_START = 'LOAD_CARDS_START'
export const FIVE_CARDS = 'FIVE_CARDS'
export const SET_CURRENT_CARD = 'SET_CURRENT_CARD'



export const getCards = () => dispatch =>{
    dispatch ({ type: GET_CARDS_START})
    axios.get('https://api.scryfall.com/cards/search?q=a%3A"rebecca+guay"')
        .then(({data}) => {
            dispatch ({ type: GET_CARDS_SUCCESS, payload: data.data})
        })
        .catch(err => {
            console.error(err)
            dispatch({ type: GET_CARDS_FAILURE, payload: "404 Error, unable to fetch cards"})
        })}

export const fiveCards = (arr) => {
    return {type: FIVE_CARDS, payload: arr}
}

export const setCurrentCard = () => dispatch => {
    console.log('test')
    dispatch ({type: SET_CURRENT_CARD, payload: obj})
}


