import { GET_CARDS_START,
     GET_CARDS_SUCCESS,
     GET_CARDS_FAILURE,
     FIVE_CARDS,
     SET_CURRENT_CARD
     } from "../actions"

export const initialState = {
    cards: [],
    isFetching: false,
    error: '',
    dynamic: false,
    displayCards: [],
    currentCard: {}
}

const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CARDS_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_CARDS_SUCCESS: 
            return{
                ...state,
                isFetching: false,
                cards: action.payload,
                dynamic: true
            }
        case GET_CARDS_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FIVE_CARDS:
            console.log('ping')
            return{
                ...state,
                displayCards: action.payload
            }
        case SET_CURRENT_CARD:
            return{
                ...state,
                currentCard: action.payload
            }
        default:
            return state;
    }
}

export default cardReducer