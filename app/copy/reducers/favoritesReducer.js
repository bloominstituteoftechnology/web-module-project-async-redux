import {TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from './../actions/favoritesActions'
const initialState = {
    
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(TOGGLE_FAVORITES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        default: 
            return (state);
    }    
}

export default favoritesReducer;