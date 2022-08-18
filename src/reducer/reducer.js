import { combineReducers } from 'redux'
    import * as types from '../action-types/action-types'

    const initialCharacters = []
    function characters(state = initialCharacters, action) {
      switch (action.type) {
        case types.ADD_ALL_CHARACTERS: {
          return action.payload
        }
        default:
          return state
      }
    }

    export default combineReducers({
      characters, 
    })