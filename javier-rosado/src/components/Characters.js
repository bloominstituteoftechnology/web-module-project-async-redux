import React, { useEffect } from 'react'
import { getCharacters } from '../actions'
import { connect } from 'react-redux'
import axios from 'axios'

const Characters = ({characters, dispatch}) => {

  const handleClick = () => {
   dispatch(getCharacters());
  }

    return (
        <div>
            <button onClick={handleClick}>Get Characters</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, {}) (Characters)
