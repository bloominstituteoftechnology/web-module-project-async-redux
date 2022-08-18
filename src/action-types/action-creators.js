import * as types from './action-types'
import axios from 'axios'

const URL = 'https://rickandmortyapi.com/api/character'

    export function getCharacters() {
      return function(dispatch) {
        axios.get(URL)
        .then(res => {
            dispatch({type: types.ADD_ALL_CHARACTERS, payload: res.data.results})
        })
      }
    }