import React, { useEffect } from 'react';
import CharacterList from './components/CharacterList'
import { Route, Link } from 'react-router-dom'

import './App.css';

import { connect } from 'react-redux'
import * as actions from './action-types/action-creators'

function App(props) {

  useEffect(()=> {
    props.getCharacters()
  }, [])

  return (
    <div className="App">
      <div className='header'>Rick and Morty Characters</div>
      <CharacterList/>
    </div>
  );
}

export default connect(st => st, actions)(App) 