import { FETCH_YUGIOH_START, FETCH_YUGIOH_SUCCESS, FETCH_YUGIOH_FAIL } from "../actions/mainActions";

const initialState = {
    yughioCards: [],
    cardsLoaded: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_YUGIOH_START:
            return {
                state
            }
        case FETCH_YUGIOH_SUCCESS:
            return {
                ...state,
                yugiohCards: action.payload,
                cardsLoaded: true
            }
        case FETCH_YUGIOH_FAIL:
            return {
                state
            }

        default:
            return state;
    }
}

export default reducer;